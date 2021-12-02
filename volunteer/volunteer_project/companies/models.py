from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.IntegerField()

    def __str__(self):
        return "Company: " + self.name