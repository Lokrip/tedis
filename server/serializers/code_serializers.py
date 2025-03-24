from rest_framework import serializers
from server.models import GenerateCodeConfirmationEmail

class CodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GenerateCodeConfirmationEmail
        fields = ["id", "user", "code", "uuid", "expiry_time"]

