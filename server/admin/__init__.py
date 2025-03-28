from django.contrib import admin

from server.models import (
    Product,
    Category,
    Customers,
    PopularSearch,
    GenerateCodeConfirmationEmail,
    ProductImage,
    Banner
)

admin.site.register(Product)
admin.site.register(Banner)
admin.site.register(Category)
admin.site.register(Customers)
admin.site.register(ProductImage)
admin.site.register(PopularSearch)
admin.site.register(GenerateCodeConfirmationEmail)
