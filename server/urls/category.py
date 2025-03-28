from django.urls import path, include

from rest_framework.routers import DefaultRouter

from server.views.category_view import CategoryViewSet

router = DefaultRouter()
router.register(r"categories", CategoryViewSet, basename="categories")

category_urlpatterns = [
    path("api/v1/", include(router.urls))
]
