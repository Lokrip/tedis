from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)
from rest_framework.viewsets import (
    ViewSet,
    ModelViewSet
)
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_200_OK
)

from server.serializers.auth_serializers import (
    CustomTokenObtainPairSerializer,
    CustomTokenRefreshSerializer,
    RegisterSerializer
)
from server.models import Customers

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
    @action(detail=False, methods=['post'], url_path="verify")
    def verify(self, request):
        # serializer = 
        return Response({"message": "Verification successful"}, status=HTTP_200_OK)

    def prefome_create(self, instanse):
        instanse.save()
