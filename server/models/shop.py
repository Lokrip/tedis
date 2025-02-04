from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify

from server.models import (
    DateCreatedModel,
    DateUpdatedModel,
    ModelTitle
)

from mptt.models import (
    MPTTModel,
    TreeForeignKey
)



class Category(MPTTModel):
    parent = TreeForeignKey(
        "self",
        on_delete=models.CASCADE,
        verbose_name=_("parent")
    )



class Product(DateCreatedModel, DateUpdatedModel, ModelTitle):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name=_("product user")
    )

    slug = models.SlugField(
        _("product slug"),
        blank=True,
        help_text=_('Unique tag ID for URL'),
        unique=True
    )

    # def save(self, *args, **kwargs):
    #     if not self.slug:
    #         self.slug = f"{slugify(self.title)}-{}"


    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def __str__(self):
        return self.name

