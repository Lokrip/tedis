# Generated by Django 5.1.4 on 2025-02-08 14:39

import django.db.models.deletion
import mptt.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0006_alter_category_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='parent',
            field=mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='server.category', verbose_name='parent'),
        ),
    ]
