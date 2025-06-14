from django.db import models
from jsonfield import JSONField

class ReusableComponent(models.Model):
    global_id = models.CharField(max_length=64, unique=True)
    name = models.CharField(max_length=256)
    type = models.CharField(max_length=128)
    user_comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
class UploadedIFC(models.Model):
    name = models.CharField(max_length=256)
    file = models.FileField(upload_to='ifc_files/')
    project_name = models.CharField(max_length=256, blank=True)
    location = models.CharField(max_length=256, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class MainCategory(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100)
    main_category = models.ForeignKey(MainCategory, on_delete=models.CASCADE, related_name='subcategories')
    ifc_types = models.JSONField(default=list)  # Speichert IFC-Typen (z. B. ["IfcWall", "IfcCurtainWall"])

    def __str__(self):
        return self.name

class Component(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=200)
    main_category = models.ForeignKey(MainCategory, on_delete=models.CASCADE)
    sub_category = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    properties = JSONField()  # z. B. {"material": "Holz", "abmessungen": "1200x2000mm", ...}
    fragment_id = models.CharField(max_length=100)  # Aus IFC fragmentID
    model_uuid = models.CharField(max_length=100)  # Aus IFC modelUUID

    def __str__(self):
        return self.name