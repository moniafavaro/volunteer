# Generated by Django 3.2.9 on 2021-12-01 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_position', models.CharField(max_length=100)),
                ('hours_per_day', models.IntegerField()),
                ('address', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=250)),
            ],
        ),
    ]