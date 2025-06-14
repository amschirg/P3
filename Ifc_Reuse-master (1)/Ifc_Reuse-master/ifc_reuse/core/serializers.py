from rest_framework import serializers
from core.models import MainCategory, SubCategory, Component

class MainCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MainCategory
        fields = ['id', 'name']

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ['id', 'name', 'ifc_types']

class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = ['id', 'name', 'main_category', 'sub_category', 'properties', 'fragment_id', 'model_uuid']