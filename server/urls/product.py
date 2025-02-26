from django.urls import path, include

from rest_framework.routers import SimpleRouter

from server.views.product_view import ProductViewSet

router = SimpleRouter()
router.register(r'products', ProductViewSet, basename='product')

product_urlpatterns = [
    path("api/v1/", include(router.urls))
]
