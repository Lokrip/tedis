from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path

from debug_toolbar.toolbar import debug_toolbar_urls

from server.urls.auth import auth_urlpatterns
from server.urls.category import category_urlpatterns
from server.urls.product import product_urlpatterns
from server.urls.swagger import swagger_urlpatterns
from server.urls.banner import banner_urlpatterns
from server import settings

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    *auth_urlpatterns,
    *product_urlpatterns,
    *category_urlpatterns,
    *swagger_urlpatterns,
    *banner_urlpatterns
] + debug_toolbar_urls()


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
