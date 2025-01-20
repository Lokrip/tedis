from django.db import models
from django.contrib.auth.models import (
    AbstractUser, BaseUserManager
)
from django_countries.fields import CountryField
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    """User AbstractUser Model

    Args:
        AbstractUser (Model): Create model

    Returns:
        fields: in this model the fields of the model are stored
    """
    email = models.EmailField(_("email address"), unique=True)
    bio = models.TextField(_("user description"))
    image = models.ImageField(
        _("user image"),
        upload_to='user/images/%Y/%m/%d/',
        blank=True,
        null=True
    )
    location = CountryField(
        verbose_name=_('user country'),
        blank=True,
        null=True
    )
    phone = models.CharField(
        _('user phone number'),
        max_length=15,
        blank=True,
        unique=True,
        null=True
    )
    is_author = models.BooleanField(_('author'), default=False)
    is_subscriber = models.BooleanField(_('subscriber'), default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

