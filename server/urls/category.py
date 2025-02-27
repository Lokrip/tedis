from django.urls import path, include

from rest_framework.routers import SimpleRouter

from server.views.category_view import CategoryViewSet

router = SimpleRouter()
router.register(r"categories", CategoryViewSet, basename="categories")

category_urlpatterns = [
    path("api/v1/", include(router.urls))
]
