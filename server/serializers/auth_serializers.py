import uuid

from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
    TokenRefreshSerializer
)
from rest_framework import serializers
from rest_framework_simplejwt.settings import api_settings

from django.utils import timezone
from django.contrib.auth.hashers import make_password

from django_countries.serializer_fields import CountryField

from server.models import (
    Customers,
    GenerateCodeConfirmationEmail
)
from server.validators import (
    is_valid_username,
    is_valid_email
)
from server.tasks.auth_tasks import send_mail_to_auth
from server.exception import (
    DATA_NOT_FOUND,
    VALIDATION_ERROR
)


FORBIDDEN_USERNAMES = {"admin", "root", "superuser", "moderator", "support"}

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        now = timezone.now()

        access_token_lifetime = api_settings.ACCESS_TOKEN_LIFETIME

        data.update({
            "id": self.user.id,
            'username': self.user.username,
            'email': self.user.email,
            "accessTokenExpires": int((now + access_token_lifetime).timestamp()),
        })
        return data

class CustomTokenRefreshSerializer(TokenRefreshSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        access_token_lifetime = api_settings.ACCESS_TOKEN_LIFETIME
        refresh_token_lifetime = api_settings.REFRESH_TOKEN_LIFETIME

        now = timezone.now()

        data.update({
            "access_expires_in": int((now + access_token_lifetime).timestamp()),  # В секундах с 1970
            "refresh_expires_in": int((now + refresh_token_lifetime).timestamp()),  # В секундах с 1970
        })

        return data


class RegisterSerializer(serializers.ModelSerializer):
    location = CountryField()
    username = serializers.CharField(max_length=40)

    class Meta:
        model = Customers
        fields = [
            'email', 'password', 'username', 'first_name', 'last_name',
            'phone', 'city', 'zip_code', 'street', 'house_number', 'location',
            'image', 'role'
        ]
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate_username(self, username):
        return is_valid_username(username)

    def validate_email(self, email):
        return is_valid_email(email)

    def auth(self, customer: Customers):
        if not customer:
            raise ValueError(DATA_NOT_FOUND)

        email = customer.email
        password = customer.password

        if (
            email is not None and
            password is not None
        ):
            uuid_code = uuid.uuid4()
            send_mail_to_auth.delay(customer.pk, str(uuid_code))
            return customer
        else:
            raise serializers.ValidationError(VALIDATION_ERROR)


    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        customer = Customers.objects.create(**validated_data)
        customer.is_active = False
        customer.save()
        return self.auth(customer)


class VerifySerializer(serializers.Serializer):
    class Meta:
        model = GenerateCodeConfirmationEmail
        fields = [""]
