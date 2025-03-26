from django.db import transaction
from django.shortcuts import get_object_or_404

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_200_OK,
    HTTP_400_BAD_REQUEST
)

from server.serializers.auth_serializers import (
    CustomTokenObtainPairSerializer,
    CustomTokenRefreshSerializer,
    RegisterSerializer
)
from server.serializers.code_serializers import CodeSerializer
from server.models import Customers, GenerateCodeConfirmationEmail

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class CustomTokenRefreshView(TokenRefreshView):
    serializer_class = CustomTokenRefreshSerializer


class RegisterViewSet(ViewSet):
    def create(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.prefome_create(serializer)
        return Response(serializer.data, status=HTTP_201_CREATED)

    @action(detail=False, methods=["get"], url_path="get-list-code")
    def get_list_code(self, request):
        queryset = GenerateCodeConfirmationEmail.objects.all()
        serializer = CodeSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def verify(self, request):
        email = request.data.get("email", None)
        code = request.data.get("code", None)

        if email is None or code is None:
            return Response({"error": "Email and code are required."}, status=HTTP_400_BAD_REQUEST)

        verify_code = get_object_or_404(
            GenerateCodeConfirmationEmail,
            code=code,
            user__email=email
        )

        with transaction.atomic():
            verify_code.user.is_active = True
            verify_code.user.save()
            verify_code.delete()

        return Response({"message": "Verification successful"}, status=HTTP_200_OK)

    def prefome_create(self, instanse):
        instanse.save()
