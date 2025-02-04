from django.db import models
from django.utils.translation import gettext_lazy as _

class DateCreatedModel(models.Model):
    created_at = models.DateTimeField(_("creation date"), auto_now_add=True)

    class Meta:
        abstract = True

        verbose_name = _("Date Created Model")
        verbose_name_plural = _("Date Created Models")
