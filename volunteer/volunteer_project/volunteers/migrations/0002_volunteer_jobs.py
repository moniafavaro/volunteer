# Generated by Django 3.2.9 on 2021-12-02 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_job_company'),
        ('volunteers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='volunteer',
            name='jobs',
            field=models.ManyToManyField(to='jobs.Job'),
        ),
    ]
