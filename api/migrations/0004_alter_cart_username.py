# Generated by Django 4.1.3 on 2022-11-10 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_cart'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='userName',
            field=models.TextField(),
        ),
    ]
