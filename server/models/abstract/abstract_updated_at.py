from django.db import models
from django.utils.translation import gettext_lazy as _


class DateUpdatedModel(models.Model):
    updated_at = models.DateTimeField(_("updated date"), auto_now=True)

    class Meta:
        abstract = True

        verbose_name = _("Date Updated Model")
        verbose_name_plural = _("Date Updated Models")
