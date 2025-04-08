from django.db import models
from django.utils.translation import gettext_lazy as _

from django.conf import settings

from server.core.utils.code import generate_and_save_slug
from server.models.abstract.abstract_created_at import DateCreatedModel
from server.models.abstract.abstract_title import ModelTitle


class Banner(ModelTitle, DateCreatedModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name=_("User")
    )
    image = models.ImageField(_("Image"), upload_to='banners/')
    is_active = models.BooleanField(_("Active"), default=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            generate_and_save_slug(self)
        else:
            return super().save(*args, **kwargs)

    class Meta:
        indexes = [
            models.Index(fields=[
                "title",
                "metaTitle"
            ])
        ]

        verbose_name = _("Banner")
        verbose_name_plural = _("Banners")
