from django.test import TestCase, Client
from rest_framework.test import APIClient
from core.models import MainCategory, SubCategory, Component
from django.core.files.uploadedfile import SimpleUploadedFile
import ifcopenshell
import io
import json
from django.urls import reverse

class IFCTestCase(TestCase):
    def setUp(self):
        # Testdaten für Kategorien erstellen
        self.main_category = MainCategory.objects.create(
            id='ausbauelemente', name='Ausbauelemente'
        )
        self.sub_category = SubCategory.objects.create(
            id='wande', name='Wände', main_category=self.main_category,
            ifc_types=['IfcWall']
        )
        # Testkomponente erstellen
        self.component = Component.objects.create(
            id='12345',
            name='Testwand',
            main_category=self.main_category,
            sub_category=self.sub_category,
            properties={
                'material': 'Holz',
                'abmessungen': '1200x2000mm',
                'storey': 'EG',
                'zustand_schadensfreiheit': 'Gebraucht'
            },
            fragment_id='frag123',
            model_uuid='model456'
        )
        self.client = APIClient()

    def test_main_category_creation(self):
        """Testet die Erstellung einer Hauptkategorie"""
        self.assertEqual(self.main_category.name, 'Ausbauelemente')
        self.assertEqual(str(self.main_category), 'Ausbauelemente')

    def test_sub_category_creation(self):
        """Testet die Erstellung einer Unterkategorie"""
        self.assertEqual(self.sub_category.name, 'Wände')
        self.assertEqual(self.sub_category.main_category, self.main_category)
        self.assertEqual(self.sub_category.ifc_types, ['IfcWall'])

    def test_component_creation(self):
        """Testet die Erstellung einer Komponente"""
        self.assertEqual(self.component.name, 'Testwand')
        self.assertEqual(self.component.properties['material'], 'Holz')
        self.assertEqual(self.component.fragment_id, 'frag123')

    def test_main_categories_api(self):
        """Testet den main_categories API-Endpunkt"""
        response = self.client.get('/api/main-categories')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['id'], 'ausbauelemente')

    def test_sub_categories_api(self):
        """Testet den sub_categories API-Endpunkt"""
        response = self.client.get('/api/sub-categories?main_category=ausbauelemente')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['id'], 'wande')

    def test_properties_api(self):
        """Testet den properties API-Endpunkt"""
        response = self.client.get(
            '/api/properties?main_category=ausbauelemente&sub_category=wande'
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        expected_properties = ['abmessungen', 'material', 'storey', 'zustand_schadensfreiheit']
        self.assertEqual([prop['id'] for prop in data], expected_properties)

    def test_property_values_api(self):
        """Testet den property_values API-Endpunkt"""
        response = self.client.get(
            '/api/property-values?main_category=ausbauelemente&sub_category=wande&property=material'
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data, ['Holz'])

    def test_components_api(self):
        """Testet den components API-Endpunkt"""
        response = self.client.get(
            '/api/components?main_category=ausbauelemente&sub_category=wande&property=material&value=Holz'
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'Testwand')

    def test_upload_ifc(self):
        """Testet den upload_ifc Endpunkt"""
        # Erstellen einer einfachen IFC-Datei für Testzwecke
        ifc_file = ifcopenshell.file()
        wall = ifc_file.create_entity('IfcWall', Name='Testwand')
        wall.ObjectType = 'Holz'
        wall.GlobalId = 'test123'
        # IFC-Datei in Bytes speichern
        buffer = io.BytesIO()
        ifc_file.write(buffer)
        buffer.seek(0)
        uploaded_file = SimpleUploadedFile('test.ifc', buffer.read(), content_type='application/octet-stream')

        response = self.client.post('/api/upload-ifc', {'ifc_file': uploaded_file}, format='multipart')
        self.assertEqual(response.status_code, 201)
        # Überprüfen, ob die Komponente erstellt wurde
        component = Component.objects.get(id=str(wall.id()))
        self.assertEqual(component.name, 'Testwand')
        self.assertEqual(component.properties['material'], 'Holz')
