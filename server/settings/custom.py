IN_DOCKER = True

IS_DEV = True
IS_PROD = False

DEBUG_TOOLBAR_CONFIG = {
    'SHOW_TOOLBAR_CALLBACK': lambda request: True,  # Показывать панель всегда
}

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = 'slavadorohov499@gmail.com'
EMAIL_HOST_PASSWORD = 'xzwrtlsyagmmnfir'
