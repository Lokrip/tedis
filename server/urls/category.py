from django.urls import path, include

from server.views.category_view import CategoryViewSet
from server.router import router

router.register(r"categories", CategoryViewSet, basename="categories")

category_urlpatterns = [
    path("", include(router.urls))
]
