# Ошибки, с данными
DATA_NOT_FOUND = "Data not available"  # Данные недоступны
RESOURCE_NOT_FOUND = "Requested resource was not found"  # Запрашиваемый ресурс не найден
CREATION_FAILED = "Failed to create resource"  # Не удалось создать ресурс
UPDATE_FAILED = "Failed to update resource"  # Не удалось обновить ресурс
RESOURCE_NOT_UPDATABLE = "Resource cannot be updated"  # Ресурс не подлежит обновлению
DELETION_FAILED = "Failed to delete resource"  # Не удалось удалить ресурс
RESOURCE_NOT_DELETABLE = "Resource cannot be deleted"  # Ресурс не подлежит удалению

# Ошибки валидации данных
INVALID_INPUT = "Invalid input provided"  # Введены неверные данные
VALIDATION_ERROR = "Data validation failed"  # Ошибка валидации данных
MISSING_REQUIRED_FIELD = "A required field is missing"  # Отсутствует обязательное поле
INVALID_FORMAT = "Invalid data format"  # Неверный формат данных
VALUE_OUT_OF_RANGE = "Value is out of allowed range"  # Значение выходит за допустимые пределы
DUPLICATE_ENTRY = "Duplicate entry detected"  # Обнаружено дублирование данных

# Ошибки авторизации и доступа
NOT_AUTHORIZED = "User is not authorized"  # Пользователь не авторизован
PERMISSION_DENIED = "You do not have permission to perform this action"  # Доступ запрещен
AUTHENTICATION_FAILED = "Authentication failed"  # Ошибка аутентификации
TOKEN_EXPIRED = "Authentication token has expired"  # Токен аутентификации истек
ACCOUNT_LOCKED = "Account is locked due to multiple failed attempts"  # Аккаунт заблокирован из-за множества неудачных попыток

# Ошибки бизнес-логики
BUSINESS_RULE_VIOLATION = "Business rule violation detected"  # Нарушение бизнес-правил
TRANSACTION_FAILED = "Transaction failed"  # Ошибка транзакции
INSUFFICIENT_FUNDS = "Insufficient funds for this operation"  # Недостаточно средств для операции
INVALID_TRANSACTION_STATE = "Transaction is in an invalid state"  # Транзакция в некорректном состоянии
CONFLICT_ERROR = "Conflict detected with existing data"  # Конфликт с существующими данными

# Ошибки серверных и сетевых запросов
BAD_REQUEST = "Bad request"  # Некорректный запрос
TIMEOUT_ERROR = "The request timed out"  # Превышено время ожидания запроса
SERVER_ERROR = "An internal server error occurred"  # Внутренняя ошибка сервера
SERVICE_UNAVAILABLE = "Service is currently unavailable"  # Сервис временно недоступен
DATABASE_ERROR = "Database operation failed"  # Ошибка базы данных
TOO_MANY_REQUESTS = "Too many requests, please try again later"  # Слишком много запросов, попробуйте позже


class CustomAttributeException(AttributeError):
    def __init__(self, message):
        super().__init__(message)
