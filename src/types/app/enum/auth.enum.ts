export enum AuthError {
    // Пользователь не найден в базе данных
    UserNotFound = 'User not found',

    // Неверный пароль
    InvalidPassword = 'Invalid password',

    // Пользователь не авторизован
    Unauthorized = 'Unauthorized',

    // Пользователь уже существует
    UserAlreadyExists = 'User already exists',

    // Ошибка регистрации пользователя
    RegistrationFailed = 'Registration failed',

    // Ошибка аутентификации пользователя
    AuthenticationFailed = 'Authentication failed',

    // Сессия истекла
    SessionExpired = 'Session expired',

    // Пользователь заблокирован
    UserBlocked = 'User is blocked',

    // Неудачная попытка входа
    LoginFailed = 'Login failed',

    // Пользователь не подтвердил свой email
    EmailNotVerified = 'Email not verified',

    // Пароль не соответствует требованиям безопасности
    PasswordNotSecure = 'Password not secure',

    // Не удается сбросить пароль
    PasswordResetFailed = 'Password reset failed',

    // Ошибка при отправке кода подтверждения
    VerificationCodeSendFailed = 'Failed to send verification code',

    // Слишком много неудачных попыток входа
    TooManyFailedLoginAttempts = 'Too many failed login attempts',

    // Недостаточно прав для доступа
    InsufficientPermissions = 'Insufficient permissions',

    // Код подтверждения неверен
    InvalidVerificationCode = 'Invalid verification code',

    // У пользователя нет прав для выполнения этой операции
    UserNotAuthorizedForOperation = 'User not authorized for this operation',
}

export enum AuthStatus {
    // Пользователь аутентифицирован и имеет доступ
    Authenticated = 'Authenticated',

    // Пользователь не аутентифицирован
    NotAuthenticated = 'Not Authenticated',

    // Сессия активна
    SessionActive = 'Session Active',

    // Сессия неактивна
    SessionInactive = 'Session Inactive',

    // Пользователь заблокирован
    Blocked = 'Blocked',

    // Пользователь подтвержден и может войти
    EmailVerified = 'Email Verified',

    // Пользователь не подтвердил email
    EmailUnverified = 'Email Unverified',

    // Пользователь ожидает подтверждения регистрации
    AwaitingEmailVerification = 'Awaiting Email Verification',

    // Пароль изменен успешно
    PasswordChanged = 'Password Changed',

    // Пароль не изменен
    PasswordNotChanged = 'Password Not Changed',

    // Пользователь не авторизован для выполнения действия
    UnauthorizedAction = 'Unauthorized Action',

    // Пользователь успешно зарегистрирован
    RegistrationSuccessful = 'Registration Successful',

    // Вход в систему успешен
    LoginSuccessful = 'Login Successful',

    // Вход в систему неудачен
    LoginUnsuccessful = 'Login Unsuccessful',

    // Пользователь разлогинен
    LoggedOut = 'Logged Out',
}

export enum AuthRole {
    // Пользователь — администратор системы
    Admin = 'Admin',

    // Пользователь — обычный пользователь
    User = 'User',

    // Пользователь — гость
    Guest = 'Guest',

    // Пользователь — модератор
    Moderator = 'Moderator',

    // Пользователь — пользователь с ограниченными правами
    RestrictedUser = 'Restricted User',

    // Пользователь — с правами только для чтения
    ReadOnly = 'Read Only',

    // Пользователь — подписчик
    Subscriber = 'Subscriber',
}
