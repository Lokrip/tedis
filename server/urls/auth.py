from django.urls import path, include
from rest_framework_simplejwt.views import TokenVerifyView

from server.views.auth_view import (
    CustomTokenObtainPairView,
    CustomTokenRefreshView,
    RegisterViewSet
)
from server.router import router

router.register(r"auth", RegisterViewSet, basename="auth")

auth_urlpatterns = [
    path('drf-auth/', include('rest_framework.urls')),
    path('', include(router.urls)),
]

jwt_urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
