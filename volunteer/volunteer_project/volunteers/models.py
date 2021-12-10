from django.db import models
from django.conf import settings

class Volunteer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    curriculum_vitae = models.CharField(max_length=1000, null=True)
    user_id = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    jobs = models.ManyToManyField("jobs.Job", related_name='jobs', blank=True)

    def __str__(self):
        return 'Volunteer: ' + self.name