from django.contrib import admin

from server.models import (
    Product,
    Category,
    Customers
)

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Customers)
