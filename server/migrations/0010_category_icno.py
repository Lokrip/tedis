# Generated by Django 5.1.4 on 2025-03-09 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0009_alter_category_slug_alter_customers_role_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='icno',
            field=models.CharField(blank=True, default='HelpCircle', max_length=10),
        ),
    ]
