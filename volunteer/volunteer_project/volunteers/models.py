from django.db import models
from django.db.models.base import Model

class Volunteer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    curriculum_vitae = models.FileField(upload_to=None)

    def __str__(self):
        return 'Volunteer' + self.name