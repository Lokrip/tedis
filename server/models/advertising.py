from django.db import models
from django.utils.translation import gettext_lazy as _

from server.models.abstract.abstract_created_at import DateCreatedModel
from server.models.abstract.abstract_title import ModelTitle

class Banner(ModelTitle, DateCreatedModel):
    image = models.ImageField(_("Image"), upload_to='banners/')
    active = models.BooleanField(_("Active"), default=True)

    def __str__(self):
        return self.title

    class Meta:
        indexes = [
            models.Index(fields=[
                "title",
                "metaTitle"
            ])
        ]

        verbose_name = _("Banner")
        verbose_name_plural = _("Banners")
