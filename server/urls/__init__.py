from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include

from debug_toolbar.toolbar import debug_toolbar_urls

from server.urls.auth import (
    auth_urlpatterns,
    jwt_urlpatterns
)
from server.urls.category import category_urlpatterns
from server.urls.product import product_urlpatterns
from server.urls.swagger import swagger_urlpatterns
from server.urls.banner import banner_urlpatterns
from server.urls.country import country_urlpatterns
from server import settings

app_urlpatterns = [
    *auth_urlpatterns,
    *product_urlpatterns,
    *category_urlpatterns,
    *banner_urlpatterns,
    *country_urlpatterns
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(app_urlpatterns))
]

urlpatterns += [
    *swagger_urlpatterns,
    *jwt_urlpatterns
] + debug_toolbar_urls()


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
