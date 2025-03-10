from django.urls import path, include

from rest_framework.routers import (
    SimpleRouter,
    DefaultRouter
)

from server.views.product_view import ProductViewSet
from server.views.search_view import SearchViewSet

search_router = DefaultRouter()
search_router.register(r'search', SearchViewSet, basename='search')

product_router = SimpleRouter()
product_router.register(r'products', ProductViewSet, basename='product')

product_urlpatterns = [
    path("api/v1/", include(product_router.urls)),
    path("api/v1/", include(search_router.urls))
]
