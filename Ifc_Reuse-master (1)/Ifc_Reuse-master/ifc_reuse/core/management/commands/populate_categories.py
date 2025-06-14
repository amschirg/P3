from django.core.management.base import BaseCommand
from core.models import MainCategory, SubCategory


class Command(BaseCommand):
    help = 'Initiale Kategorien und Unterkategorien füllen'

    def handle(self, *args, **kwargs):
        categories = [
            {
                'id': 'tragwerkselemente', 'name': 'Tragwerkselemente',
                'subcategories': [
                    {'id': 'holzbalken', 'name': 'Holzbalken', 'ifc_types': ['IfcBeam']},
                    {'id': 'stahltrager', 'name': 'Stahlträger', 'ifc_types': []},
                    {'id': 'stutzen', 'name': 'Stützen', 'ifc_types': ['IfcColumn']},
                    {'id': 'betonfertigteile', 'name': 'Betonfertigteile', 'ifc_types': []},
                ]
            },
            {
                'id': 'ausbauelemente', 'name': 'Ausbauelemente',
                'subcategories': [
                    {'id': 'fenster', 'name': 'Fenster', 'ifc_types': ['IfcWindow']},
                    {'id': 'turen', 'name': 'Türen', 'ifc_types': ['IfcDoor']},
                    {'id': 'bodenbelage', 'name': 'Bodenbeläge', 'ifc_types': []},
                    {'id': 'wandverkleidungen', 'name': 'Wandverkleidungen', 'ifc_types': []},
                    {'id': 'wande', 'name': 'Wände', 'ifc_types': ['IfcWall', 'IfcCurtainWall']},
                    {'id': 'sonstige_bauteile', 'name': 'Sonstige Bauteile', 'ifc_types': ['IfcBuildingElementProxy']},
                ]
            },
            {
                'id': 'technische_gebaudeausrustung', 'name': 'Technische Gebäudeausrüstung',
                'subcategories': [
                    {'id': 'heizungssysteme', 'name': 'Heizungssysteme', 'ifc_types': []},
                    {'id': 'lueftungssysteme', 'name': 'Lüftungssysteme', 'ifc_types': []},
                    {'id': 'sanitarsysteme', 'name': 'Sanitärsysteme', 'ifc_types': []},
                    {'id': 'elektroinstallationen', 'name': 'Elektroinstallationen', 'ifc_types': []},
                ]
            },
            {
                'id': 'dachelemente', 'name': 'Dachelemente',
                'subcategories': [
                    {'id': 'dachziegel', 'name': 'Dachziegel', 'ifc_types': []},
                    {'id': 'dachplatten', 'name': 'Dachplatten', 'ifc_types': []},
                    {'id': 'dachfenster', 'name': 'Dachfenster', 'ifc_types': []},
                    {'id': 'dachisolierung', 'name': 'Dachisolierung', 'ifc_types': []},
                    {'id': 'dachdecken', 'name': 'Dachdecken', 'ifc_types': ['IfcSlab', 'IfcRoof']},
                ]
            },
            {
                'id': 'treppen', 'name': 'Treppen',
                'subcategories': [
                    {'id': 'treppenstufen', 'name': 'Treppenstufen', 'ifc_types': []},
                    {'id': 'gelander', 'name': 'Geländer', 'ifc_types': []},
                    {'id': 'treppenkonstruktion', 'name': 'Treppenkonstruktion', 'ifc_types': ['IfcStair']},
                ]
            },
        ]

        for category in categories:
            main_cat, _ = MainCategory.objects.get_or_create(id=category['id'], name=category['name'])
            for sub_cat in category['subcategories']:
                SubCategory.objects.get_or_create(
                    id=sub_cat['id'],
                    name=sub_cat['name'],
                    main_category=main_cat,
                    defaults={'ifc_types': sub_cat['ifc_types']}
                )

        self.stdout.write(self.style.SUCCESS('Kategorien und Unterkategorien erfolgreich gefüllt'))