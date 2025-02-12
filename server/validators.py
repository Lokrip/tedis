from django.core.exceptions import ValidationError
from django.core.validators import BaseValidator


class FieldValidator(BaseValidator):
    def __init__(self, min_length=None, max_length=None, regex=None, message=None, code=None):
        self.min_length = min_length
        self.max_length = max_length
