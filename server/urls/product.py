from django.urls import path, include

from rest_framework.routers import DefaultRouter

from server.views.product_view import ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')

product_urlpatterns = [
    path("api/v1/", include(router.urls))
]
