from django.urls import path, include
from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt.views import TokenVerifyView

from server.views.auth_view import (
    CustomTokenObtainPairView,
    CustomTokenRefreshView,
    RegisterViewSet
)

router = SimpleRouter()
router.register(r"auth", RegisterViewSet, basename="auth")

auth_urlpatterns = [
    path('api/v1/drf-auth/', include('rest_framework.urls')),
    path('api/v1/', include(router.urls)),

    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

]
