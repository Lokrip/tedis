from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
    TokenRefreshSerializer
)
from rest_framework_simplejwt.settings import api_settings

from datetime import timedelta
from django.utils import timezone

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
