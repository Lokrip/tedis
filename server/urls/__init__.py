from django.contrib import admin
from django.urls import path

from debug_toolbar.toolbar import debug_toolbar_urls

from server.urls.auth import auth_urlpatterns
from server.urls.category import category_urlpatterns
from server.urls.product import product_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    *auth_urlpatterns,
    *product_urlpatterns,
    *category_urlpatterns
] + debug_toolbar_urls()
