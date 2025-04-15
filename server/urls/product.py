from django.urls import path, include

from server.views.product_view import ProductViewSet
from server.views.search_view import SearchViewSet
from server.router import router

router.register(r'search', SearchViewSet, basename='search')
router.register(r'products', ProductViewSet, basename='product')

product_urlpatterns = [
    path("", include(router.urls))
]
