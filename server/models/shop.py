from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.core.validators import (
    MinValueValidator,
    MaxValueValidator
)

from server.core.utils.code import generate_and_save_slug
from server.models.advertising import Banner
from server.models.abstract.abstract_created_at import DateCreatedModel
from server.models.abstract.abstract_updated_at import DateUpdatedModel
from server.models.abstract.abstract_title import ModelTitle
from server.tasks.product_tasks import set_price_discount

from server.models.status.product_status import (
    ProductAccessibilityStatus,
    ProductConditionStatus,
    ProductWarehouseStatus,
    ProductPromotionalStatus,
    ProductChecksStatus
)

from mptt.models import (
    MPTTModel,
    TreeForeignKey
)


class Category(MPTTModel, ModelTitle, DateCreatedModel):
    parent = TreeForeignKey(
        "self",
        on_delete=models.CASCADE,
        verbose_name=_("parent"),
        related_name="children",
        blank=True,
        null=True
    )

    icon = models.CharField(max_length=20, blank=True, default="HelpCircle")

    def save(self, *args, **kwargs):
        if not self.slug:
            generate_and_save_slug(self)
        else:
            return super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")


class Product(DateCreatedModel, DateUpdatedModel, ModelTitle):
    """
    Product model represents an individual product in the system, which is associated with a user.
    It includes details such as the product's summary, accessibility status, and timestamps for when the product was created and last updated.

    Args:
        DateCreatedModel (_type_): A base model that provides a timestamp for when the product was created.
        DateUpdatedModel (_type_): A base model that provides a timestamp for when the product was last updated.
        ModelTitle (_type_): A base model that manages the product's title.

    Attributes:
        user (ForeignKey): The user associated with the product. It links to the AUTH_USER_MODEL and is a required field.
        summary (CharField): A short description of the product. It is optional and can be left blank.
        accessibility (CharField): The product's accessibility status, which can be one of the predefined choices from the ProductAccessibilityStatus enumeration. Defaults to 'COMING_SOON'.

    Returns:
        Product instance: A representation of the product with its attributes.
    """

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name=_("product user")
    )
    summary = models.CharField(
        _("product summary"),
        max_length=30,
        blank=True,
        null=True
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("product category")
    )
    banner = models.ForeignKey(
        Banner,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("product banner")
    )
    accessibility = models.CharField(
        _("product accessibility"),
        max_length=30,
        choices=ProductAccessibilityStatus.choices,
        default=ProductAccessibilityStatus.COMING_SOON
    )
    condition = models.CharField(
        _("product condition"),
        max_length=30,
        choices=ProductConditionStatus.choices,
        default=ProductConditionStatus.NEW
    )
    warehouse = models.CharField(
        _("product warehouse"),
        max_length=30,
        choices=ProductWarehouseStatus.choices,
        default=ProductWarehouseStatus.IN_WAREHOUSE
    )
    promotional = models.CharField(
        _("product promotional"),
        max_length=30,
        choices=ProductPromotionalStatus.choices,
        default=ProductPromotionalStatus.ON_SALE
    )
    checks = models.CharField(
        _("product checks"),
        max_length=30,
        choices=ProductChecksStatus.choices,
        default=ProductChecksStatus.UNDER_REVIEW
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        verbose_name=_("product price"),
        default=99.99
    )
    discount = models.PositiveSmallIntegerField(
        validators=[
            MinValueValidator(0),
            MaxValueValidator(100)
        ],
        verbose_name=_("product discount (%)"),
        default=0
    )
    price_discount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        verbose_name=_("product price discount"),
        default=99.99
    )

    def save(self, *args, save_modal=True, **kwargs):
        if not self.slug:
            generate_and_save_slug(self)
            if save_modal:
                set_price_discount.delay(self.id)
        else:
            data = super().save(*args, **kwargs)
            if save_modal:
                set_price_discount.delay(self.id)
            return data

    class Meta:
        indexes = [
            models.Index(fields=[
                "title",
                "metaTitle"
            ])
        ]

        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def __str__(self):
        return self.title


class ProductImage(DateCreatedModel, DateUpdatedModel):
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        verbose_name=_("Product"),
        related_name="images"
    )
    image = models.ImageField(
        _('Product Image'),
        upload_to='product/images/%Y/%m/%d/',
        blank=True,
        null=True
    )
    is_main = models.BooleanField(_('Is main'), default=False)

    def get_image(self):
        return self.image.url

    def __str__(self):
        return f'{self.product.title} -> {self.image.url}'

    class Meta:
        verbose_name = _('Product Image')
        verbose_name_plural = _('Product Images')


class PopularSearch(models.Model):
    query = models.CharField(max_length=255, unique=True)
    count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.query

    class Meta:
        verbose_name = _("Popular Search")
        verbose_name_plural = _("Popular Searches")
