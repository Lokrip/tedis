from django.db import transaction
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives

from server.core.utils.code import generate_unique_code
from server.settings import EMAIL_HOST_USER
from server.models import (
    Customers,
    GenerateCodeConfirmationEmail
)

class AuthService:
    def send_mail(self, user: Customers, uuid_code):
        subject = 'Confirm Your Email'
        from_email = EMAIL_HOST_USER
        random_numbers = generate_unique_code(6)

        to = user.email

        with transaction.atomic():
            confirmation = GenerateCodeConfirmationEmail.objects.create(
                user=user,
                code=random_numbers,
                uuid=uuid_code
            )
        """
        {
            "email": "lokrip2@gmail.com",
            "password": "lol1234lol1234",
            "username": "lokrip",
            "first_name": "ASDASDA",
            "last_name":"aSDASD",
            "city":"aSDASD",
            "zip_code": "asDASD",
            "street": "SADASD",
            "location": "BH"
        }
        """
        html_content = render_to_string('mail/confirm-email-code.html', {
            "title": "Code is active",
            "random_numbers": random_numbers
        })

        text_content = strip_tags(html_content)

        email = EmailMultiAlternatives(subject, text_content, from_email, [to])
        email.attach_alternative(html_content, "text/html")
        email.send()
        return confirmation.uuid
