# Generated by Django 4.1.3 on 2022-11-10 19:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_cart_username'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cart',
            old_name='userName',
            new_name='username',
        ),
    ]