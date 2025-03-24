from django.contrib import admin

from server.models import (
    Product,
    Category,
    Customers,
    PopularSearch,
    GenerateCodeConfirmationEmail
)

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Customers)
admin.site.register(PopularSearch)
admin.site.register(GenerateCodeConfirmationEmail)
