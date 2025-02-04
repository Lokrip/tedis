from django.db import models
from django.utils.translation import gettext_lazy as _

class ModelTitle(models.Model):
    title = models.CharField(_("title"), max_length=75)
    metaTitle = models.CharField(_("meta title"), max_length=100)

    class Meta:
        abstract = True

        verbose_name = _("Title Model")
        verbose_name_plural = _("Title Models")
