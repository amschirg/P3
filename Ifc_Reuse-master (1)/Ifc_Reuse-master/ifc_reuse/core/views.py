from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import ReusableComponent, UploadedIFC
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
from .utils import get_element_info
import json
import os
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from django.contrib import messages
from django.contrib.auth.models import User
from django.db import IntegrityError


def index(request):
    return render(request, "reuse/index.html")


def catalog(request):
    return render(request, "reuse/catalog.html")


def upload_page(request):
    return render(request, 'reuse/upload.html')


def api_view(request):
    return render(request, 'reuse/api.html')


def viewer_page(request, model_id):
    return render(request, 'reuse/viewer.html', {'model_id': model_id})


def about(request):
    return render(request, 'reuse/about.html')


@login_required
def settings(request):
    if request.method == 'POST':
        form_type = request.POST.get('form_type')

        if form_type == 'email':
            new_email = request.POST.get('email')
            if new_email:
                try:
                    # Verificar si el correo ya está en uso
                    if User.objects.filter(email=new_email).exclude(id=request.user.id).exists():
                        messages.error(request, "Diese E-Mail-Adresse ist bereits vergeben.")
                    else:
                        request.user.email = new_email
                        request.user.save()
                        messages.success(request, "E-Mail erfolgreich geändert.")
                except IntegrityError:
                    messages.error(request, "Fehler beim Speichern der E-Mail-Adresse.")
            else:
                messages.error(request, "Bitte geben Sie eine gültige E-Mail-Adresse ein.")

        elif form_type == 'password':
            current_password = request.POST.get('current_password')
            new_password = request.POST.get('new_password')
            new_password_confirm = request.POST.get('new_password_confirm')

            # Validar contraseña actual
            user = authenticate(username=request.user.username, password=current_password)
            if user is None:
                messages.error(request, "Das aktuelle Passwort ist falsch.")
            elif new_password != new_password_confirm:
                messages.error(request, "Die neuen Passwörter stimmen nicht überein.")
            elif len(new_password) < 8:
                messages.error(request, "Das neue Passwort muss mindestens 8 Zeichen lang sein.")
            else:
                request.user.set_password(new_password)
                request.user.save()
                messages.success(request, "Passwort erfolgreich geändert. Bitte melden Sie sich erneut an.")
                return redirect('accounts:login')

    return render(request, 'reuse/settings.html')


@login_required
def select(request, model_id):
    return render(request, 'reuse/select.html', {'model_id': model_id})


def list_uploaded_ifcs(request):
    files = UploadedIFC.objects.all().order_by('-uploaded_at')
    data = [
        {
            'id': file.id,
            'name': file.name,
            'url': file.file.url,
            'project_name': file.project_name,
            'location': file.location,
        }
        for file in files
    ]
    return JsonResponse(data, safe=False)


def ifc_files_api(request):
    ifc_dir = os.path.join(settings.MEDIA_ROOT, 'ifc_files')
    files = []
    for filename in os.listdir(ifc_dir):
        if filename.endswith('.ifc'):
            files.append({
                'name': filename,
                'url': f"{settings.MEDIA_URL}ifc_files/{filename}"
            })
    return JsonResponse(files, safe=False)


@require_http_methods(["GET"])
def get_element_info_view(request):
    """Return metadata for a single IFC element."""
    model_id = request.GET.get("model_id")
    express_id = request.GET.get("express_id")
    if not model_id or express_id is None:
        return JsonResponse({"error": "model_id and express_id required"}, status=400)

    try:
        upload = UploadedIFC.objects.get(pk=model_id)
    except UploadedIFC.DoesNotExist:
        return JsonResponse({"error": "model not found"}, status=404)

    ifc_path = upload.file.path
    info = get_element_info(ifc_path, int(express_id))
    return JsonResponse(info)


@csrf_exempt
def upload_fragment(request):
    if request.method == "POST" and request.FILES:
        frag_file = request.FILES.get("fragment")
        json_file = request.FILES.get("metadata")
        base_path = "reusable_components/"
        frag_path = default_storage.save(
            os.path.join(base_path, frag_file.name),
            ContentFile(frag_file.read())
        )

        metadata = json.loads(json_file.read().decode("utf-8"))

        ifc_filename = metadata.get("modelUUID")
        express_id = metadata.get("expressID")
        if ifc_filename and express_id is not None:
            ifc_path = os.path.join(settings.MEDIA_ROOT, "ifc_files", f"{ifc_filename}.ifc")
            info = get_element_info(ifc_path, int(express_id))
            metadata["Type"] = info.get("type", "Unknown")
            if "predefinedType" in info:
                metadata["PredefinedType"] = info["predefinedType"]
            if "material" in info:
                metadata["Material"] = info["material"]
            metadata["materials"] = info.get("materials", [])
            if "storey" in info:
                metadata["Storey"] = info["storey"]

            try:
                upload = UploadedIFC.objects.get(file__contains=ifc_filename)
                metadata["Location"] = upload.location or metadata.get("Location", "Unknown")
            except UploadedIFC.DoesNotExist:
                pass

        json_content = json.dumps(metadata, indent=2)
        json_path = default_storage.save(
            os.path.join(base_path, json_file.name),
            ContentFile(json_content.encode("utf-8"))
        )
        return JsonResponse({
            "status": "ok",
            "fragment_url": default_storage.url(frag_path),
            "metadata_url": default_storage.url(json_path),
        })
    return JsonResponse({"status": "error", "message": "Invalid request"}, status=400)


def mark_component(request):
    if request.method == "POST":
        data = json.loads(request.body)
        component, created = ReusableComponent.objects.get_or_create(
            global_id=data['global_id'],
            defaults={
                'name': data['name'],
                'type': data['type']
            }
        )
        return JsonResponse({'status': 'ok', 'created': created})


def reusable_components(request):
    components = ReusableComponent.objects.all().values(
        'global_id', 'name', 'type', 'created_at'
    )
    return JsonResponse(list(components), safe=False)


@require_http_methods(["POST"])
def upload_ifc_file(request):
    file = request.FILES.get('file')
    if not file:
        return JsonResponse({'error': 'No file provided'}, status=400)

    project_name = request.POST.get('project_name', '')
    location = request.POST.get('location', '')

    instance = UploadedIFC.objects.create(
        name=file.name,
        file=file,
        project_name=project_name,
        location=location,
    )

    return JsonResponse({
        'status': 'uploaded',
        'file_url': instance.file.url,
        'id': instance.id,
    })


from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from core.models import MainCategory, SubCategory, Component
from core.serializers import ComponentSerializer
import ifcopenshell
from django.core.files.storage import FileSystemStorage
import uuid


@api_view(['POST'])
def upload_ifc(request):
    try:
        ifc_file = request.FILES['ifc_file']
        fs = FileSystemStorage()
        filename = fs.save(ifc_file.name, ifc_file)
        file_path = fs.path(filename)

        # IFC-Datei parsen
        ifc = ifcopenshell.open(file_path)
        elements = ifc.by_type(
            ['IfcWall', 'IfcWindow', 'IfcDoor', 'IfcSlab', 'IfcBuildingElementProxy', 'IfcBeam', 'IfcColumn', 'IfcRoof',
             'IfcStair'])

        IFC_TYPE_MAPPING = {
            'IfcWall': {'main_category': 'ausbauelemente', 'sub_category': 'wande'},
            'IfcWindow': {'main_category': 'ausbauelemente', 'sub_category': 'fenster'},
            'IfcDoor': {'main_category': 'ausbauelemente', 'sub_category': 'turen'},
            'IfcSlab': {'main_category': 'dachelemente', 'sub_category': 'dachdecken'},
            'IfcBuildingElementProxy': {'main_category': 'ausbauelemente', 'sub_category': 'sonstige_bauteile'},
            'IfcBeam': {'main_category': 'tragwerkselemente', 'sub_category': 'holzbalken'},
            'IfcColumn': {'main_category': 'tragwerkselemente', 'sub_category': 'stutzen'},
            'IfcRoof': {'main_category': 'dachelemente', 'sub_category': 'dachdecken'},
            'IfcStair': {'main_category': 'treppen', 'sub_category': 'treppenkonstruktion'},
        }

        components = []
        for element in elements:
            ifc_type = element.is_a()
            mapping = IFC_TYPE_MAPPING.get(ifc_type)
            if mapping:
                main_cat = MainCategory.objects.get(id=mapping['main_category'])
                sub_cat = SubCategory.objects.get(id=mapping['sub_category'])
            else:
                main_cat = MainCategory.objects.get(id='ausbauelemente')
                sub_cat, _ = SubCategory.objects.get_or_create(
                    id=f"custom_{ifc_type.lower()}",
                    defaults={
                        'name': f"{ifc_type.replace('Ifc', '')}",
                        'main_category': main_cat,
                        'ifc_types': [ifc_type]
                    }
                )

            # Materialien extrahieren
            materials = []
            for assoc in getattr(element, 'HasAssociations', []):
                if assoc.is_a('IfcMaterial'):
                    materials.append(assoc.Name)

            # Abmessungen extrahieren
            dimensions = ''
            if hasattr(element, 'OverallWidth') and hasattr(element, 'OverallHeight'):
                width = getattr(element, 'OverallWidth', None)
                height = getattr(element, 'OverallHeight', None)
                if width and height:
                    dimensions = f"{width}x{height}mm"
            elif 'materials' in element and element.materials and 'thickness' in element.materials[0]:
                dimensions = f"Dicke {element.materials[0]['thickness']}m"

            # Name oder ObjectType für zusätzliche Eigenschaften parsen
            name = element.Name or ''
            object_type = getattr(element, 'ObjectType', '') or ''
            material_from_name = ''
            if 'Wood' in name or 'Wood' in object_type:
                material_from_name = 'Holz'
            elif 'Stone' in name or 'Stone' in object_type:
                material_from_name = 'Stein'
            elif 'Steel' in name or 'Steel' in object_type:
                material_from_name = 'Stahl'

            properties = {
                'material': ', '.join(materials) or material_from_name or 'Unbekannt',
                'abmessungen': dimensions or 'Unbekannt',
                'zustand_schadensfreiheit': 'Gebraucht',  # Standard, könnte aus IFC extrahiert werden
                'storey': element.ContainedInStructure[0].Name if hasattr(element,
                                                                          'ContainedInStructure') and element.ContainedInStructure else 'Unbekannt',
            }

            # Spezifische Eigenschaften basierend auf Unterkategorie hinzufügen
            if sub_cat.id == 'fenster':
                properties['verglasung'] = 'Doppel' if 'double' in name.lower() else 'Einfach'
            elif sub_cat.id in ['turen', 'wandverkleidungen']:
                properties['oberflachenbehandlung'] = 'Satin' if 'Satin' in str(materials) else 'Unbekannt'
            elif sub_cat.id == 'dachdecken':
                properties['oberflachenbeschaffenheit'] = 'Rau' if 'Beton' in properties['material'] else 'Unbekannt'

            component = Component.objects.create(
                id=str(element.id()),
                name=name,
                main_category=main_cat,
                sub_category=sub_cat,
                properties=properties,
                fragment_id=element.get_info().get('fragmentID', str(uuid.uuid4())),
                model_uuid=element.get_info().get('modelUUID', str(uuid.uuid4())),
            )
            components.append(component)

            # Benutzerdefinierte IFC-Attribute
            if hasattr(element, 'PredefinedType') and element.PredefinedType:
                properties['vordefinierter_typ'] = element.PredefinedType
            if hasattr(element, 'ThermalTransmittance') and element.ThermalTransmittance:
                properties['wärmedurchgangskoeffizient'] = str(element.ThermalTransmittance)

        serializer = ComponentSerializer(components, many=True)
        # WebSocket-Clients benachrichtigen (falls Channels verwendet wird)
        from channels.layers import get_channel_layer
        from asgiref.sync import async_to_sync
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "components", {"type": "component_update", "message": "update"}
        )
        return Response(serializer.data, status=201)
    except Exception as e:
        return Response({'error': str(e)}, status=400)


# ... andere Importe
from django.contrib.postgres.fields.jsonb import KeyTextTransform
from django.contrib.postgres.aggregates import ArrayAgg


@api_view(['GET'])
def main_categories(request):
    categories = MainCategory.objects.all()
    serializer = MainCategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def sub_categories(request):
    main_category = request.GET.get('main_category')
    if not main_category:
        return Response({'error': 'Hauptkategorie erforderlich'}, status=400)
    subcategories = SubCategory.objects.filter(main_category_id=main_category)
    serializer = SubCategorySerializer(subcategories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def properties(request):
    main_category = request.GET.get('main_category')
    sub_category = request.GET.get('sub_category')
    if not (main_category and sub_category):
        return Response({'error': 'Hauptkategorie und Unterkategorie erforderlich'}, status=400)

    components = Component.objects.filter(
        main_category_id=main_category,
        sub_category_id=sub_category
    )
    properties = set()
    for component in components:
        properties.update(component.properties.keys())
    return Response([{'id': prop, 'name': prop.replace('_', '/')} for prop in sorted(properties)])


@api_view(['GET'])
def property_values(request):
    main_category = request.GET.get('main_category')
    sub_category = request.GET.get('sub_category')
    property = request.GET.get('property')
    if not (main_category and sub_category and property):
        return Response({'error': 'Hauptkategorie, Unterkategorie und Eigenschaft erforderlich'}, status=400)

    values = Component.objects.filter(
        main_category_id=main_category,
        sub_category_id=sub_category
    ).annotate(
        value=KeyTextTransform(property, 'properties')
    ).values('value').distinct()
    values = [v['value'] for v in values if v['value'] is not None]
    return Response(sorted(values))


@api_view(['GET'])
def components(request):
    main_category = request.GET.get('main_category')
    sub_category = request.GET.get('sub_category')
    property = request.GET.get('property')
    value = request.GET.get('value')

    query = Q()
    if main_category:
        query &= Q(main_category_id=main_category)
    if sub_category:
        query &= Q(sub_category_id=sub_category)
    if property and value:
        query &= Q(**{f'properties__{property}': value})

    components = Component.objects.filter(query)
    serializer = ComponentSerializer(components, many=True)
    return Response(serializer.data)