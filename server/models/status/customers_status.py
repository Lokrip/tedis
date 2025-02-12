from django.db import models

class Role(models.TextChoices):
    #Роли для пользователя
    USER = "user", "Пользователь"
    SUBSCRIBER = "subscriber", "Подписчик"
    ADMIN = "admin", "Администратор"
    MODERATOR = "moderator", "Модератор"
