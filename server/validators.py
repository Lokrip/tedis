import re

from rest_framework import serializers

from django.core.exceptions import ValidationError
from django.core.validators import BaseValidator

from server.models import Customers


class FieldValidator(BaseValidator):
    def __init__(self, min_length=None, max_length=None, regex=None, message=None, code=None):
        self.min_length = min_length
        self.max_length = max_length


class AutheneticatedValidation:
    def __init__(self):
        pass

def is_valid_username_format(pattern, string):
    return bool(re.match(pattern, string))

def validate_email_format(value):
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if not re.match(email_regex, value):
        raise serializers.ValidationError("Please enter a valid email.")
    return value

def is_valid_username(username):
    pattern = r"^[a-zA-Z0-9._]+$"

    if len(username) < 4 or len(username) > 30:
        raise serializers.ValidationError("Incorrect password length.")
    if not is_valid_username_format(pattern=pattern, string=username):
        raise serializers.ValidationError("Invalid format for username.")
    if Customers.objects.filter(username=username).exists():
        raise serializers.ValidationError("A user with this username exists.")
    return username

def is_valid_email(email):
    email = validate_email_format(email)
    if Customers.objects.filter(email=email).exists():
        raise serializers.ValidationError("Such user with such email exists.")
    return email

def is_valid_password(password, password_confirm):
    if not password == password_confirm:
        raise serializers.ValidationError("Password is not equal to confirm password.")
    return password, password_confirm

