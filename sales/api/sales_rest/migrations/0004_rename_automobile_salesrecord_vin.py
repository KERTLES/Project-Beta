# Generated by Django 4.0.3 on 2022-08-04 01:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_alter_salesrecord_price'),
    ]

    operations = [
        migrations.RenameField(
            model_name='salesrecord',
            old_name='automobile',
            new_name='vin',
        ),
    ]
