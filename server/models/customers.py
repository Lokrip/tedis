import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator
from django.utils import timezone

from server.models.status.customers_status import Role
from server.models.abstract.abstract_created_at import DateCreatedModel
from server.core.utils.date import default_expiry_time

class Customers(AbstractUser):
    """User AbstractUser Model

    Args:
        AbstractUser (Model): Create model

    Returns:
        fields: in this model the fields of the model are stored
    """
    email = models.EmailField(_("email address"), unique=True)
    bio = models.TextField(_("user description"), max_length=400)

    first_name = models.CharField(_("first name"), max_length=45)
    last_name = models.CharField(_("last name"), max_length=45)

    city = models.CharField(_("user city"), max_length=45)
    zip_code = models.CharField(_("zip code"), max_length=45)
    street = models.CharField(_("user street"), max_length=45)
    location = CountryField(
        verbose_name=_('user country'),
        blank=True,
        null=True
    )
    house_number = models.PositiveIntegerField(
        validators=[MinValueValidator(1)],
        verbose_name="house number",
        help_text="Enter a positive integer for the house number",
        default=0
    )
    image = models.ImageField(
        _("user image"),
        upload_to='user/images/%Y/%m/%d/',
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
    role = models.CharField(
        max_length=10,
        choices=Role.choices,
        default=Role.USER
    )
    is_author = models.BooleanField(_('author'), default=False)
    is_subscriber = models.BooleanField(_('subscriber'), default=False)

    def is_admin(self):
        return self.role == Role.ADMIN or self.is_staff

    def is_user_subscriber(self):
        return self.role == Role.SUBSCRIBER and self.is_subscriber

    def is_moderator(self):
        return self.role == Role.MODERATOR

    def is_user(self):
        return self.role == Role.USER

    def is_author_user(self):
        return self.role == Role.ADMIN and self.is_author

    def is_subscriber_user(self):
        return self.role == Role.USER and self.is_subscriber

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

class GenerateCodeConfirmationEmail(DateCreatedModel):
    user = models.ForeignKey(
        Customers,
        on_delete=models.CASCADE,
        verbose_name=_('User'),
    )
    code = models.CharField(
        max_length=6,
        verbose_name=_('Confirmation Code'),
        help_text=_('A 6-digit confirmation code')
    )
    uuid = models.UUIDField(
        unique=True,
        editable=False,
        verbose_name=_('Uuid CODE'),
        default=uuid.uuid4
    )
    expiry_time = models.DateTimeField(verbose_name=_('Expiry Time'),)

    def is_expired(self):
        return self.expiry_time < timezone.now()

    def save(self, *args, **kwargs):
        if not self.expiry_time:
            self.expiry_time = default_expiry_time()
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.pk)

    class Meta:
        verbose_name = 'Generate Code'
        verbose_name_plural = 'Generate Codes'


