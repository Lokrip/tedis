# Generated by Django 5.1.4 on 2025-03-26 13:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0025_alter_generatecodeconfirmationemail_expiry_time'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='creation date')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated date')),
                ('image', models.ImageField(blank=True, null=True, upload_to='product/images/%Y/%m/%d/', verbose_name='Product Image')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='server.product', verbose_name='Product')),
            ],
            options={
                'verbose_name': 'Product Image',
                'verbose_name_plural': 'Product Images',
            },
        ),
    ]
