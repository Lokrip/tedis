# Generated by Django 5.1.4 on 2025-03-24 14:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0021_alter_generatecodeconfirmationemail_expiry_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generatecodeconfirmationemail',
            name='expiry_time',
            field=models.DateTimeField(default=datetime.datetime(2025, 3, 24, 14, 58, 10, 871986, tzinfo=datetime.timezone.utc), verbose_name='Expiry Time'),
        ),
    ]
