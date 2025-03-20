from datetime import timedelta

from django.utils import timezone

def default_expiry_time():
    return timezone.now() + timedelta(minutes=10)
