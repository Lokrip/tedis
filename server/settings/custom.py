IN_DOCKER = True

IS_DEV = True
IS_PROD = False

DEBUG_TOOLBAR_CONFIG = {
    'SHOW_TOOLBAR_CALLBACK': lambda request: True,  # Показывать панель всегда
}
