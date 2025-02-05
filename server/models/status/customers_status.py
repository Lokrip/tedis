from django.db import models
class Role(models.TextChoices):
    #Роли для пользователя
    USER = "user", "Пользователь"
    ADMIN = "admin", "Администратор"
    MODERATOR = "moderator", "Модератор"
