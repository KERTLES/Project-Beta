# Generated by Django 4.0.3 on 2022-08-04 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_rename_car_name_automobilevo_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='price',
            field=models.PositiveBigIntegerField(),
        ),
    ]