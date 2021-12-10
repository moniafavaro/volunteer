from django.db import models

class Job(models.Model):
    job_position = models.CharField(max_length=100)
    hours_per_day = models.IntegerField()
    address = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)
    company = models.ForeignKey("companies.Company", related_name="jobs", on_delete=models.CASCADE)
    closed = models.BooleanField(default=False)

    def __str__(self):
        return 'Job: ' + self.job_position