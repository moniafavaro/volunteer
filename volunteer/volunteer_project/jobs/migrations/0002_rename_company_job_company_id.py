# Generated by Django 3.2.9 on 2021-12-09 10:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='job',
            old_name='company',
            new_name='company_id',
        ),
    ]