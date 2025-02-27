/**
 * Интерфейс для базовой валидации значений.
 */
interface IValidation {
    /**
     * Проверяет, является ли значение пустым.
     * @param value - Строковое значение для проверки.
     * @returns `true`, если значение пустое, иначе `false`.
     */
    isEmpty(value: string): boolean;

    /**
     * Проверяет, является ли значение числом.
     * @param value - Строковое значение для проверки.
     * @returns `true`, если значение является числом, иначе `false`.
     */
    isNumber(value: string): boolean;

    /**
     * Проверяет, превышает ли длина строки заданное минимальное значение.
     * @param value - Строковое значение для проверки.
     * @param minLength - Минимальная допустимая длина.
     * @returns `true`, если длина строки больше или равна `minLength`, иначе `false`.
     */
    hasMinLength(value: string, minLength: number): boolean;

    /**
     * Проверяет, не превышает ли длина строки заданное максимальное значение.
     * @param value - Строковое значение для проверки.
     * @param maxLength - Максимальная допустимая длина.
     * @returns `true`, если длина строки меньше или равна `maxLength`, иначе `false`.
     */
    hasMaxLength(value: string, maxLength: number): boolean;

    /**
     * Проверяет соответствие строки заданному регулярному выражению.
     * @param value - Строковое значение для проверки.
     * @param pattern - Регулярное выражение для сравнения.
     * @returns `true`, если строка соответствует шаблону, иначе `false`.
     */
    matchesPattern(value: string, pattern: RegExp): boolean;
}

/**
 * Интерфейс для валидации email.
 */
interface IEmailValidation extends IValidation {
    /**
     * Проверяет, является ли строка корректным email-адресом.
     * @param email - Строка для проверки.
     * @returns `true`, если строка является email-адресом, иначе `false`.
     */
    isEmail(email: string): boolean;
}

/**
 * Интерфейс для валидации номера телефона.
 */
interface IPhoneValidation extends IValidation {
    /**
     * Проверяет, является ли строка корректным номером телефона.
     * @param phone - Строка для проверки.
     * @returns `true`, если строка является номером телефона, иначе `false`.
     */
    isPhoneNumber(phone: string): boolean;
}

/**
 * Интерфейс для проверки сложности пароля.
 */
interface IPasswordValidation extends IValidation {
    /**
     * Проверяет, является ли пароль достаточно сложным.
     * @param password - Строка пароля для проверки.
     * @returns `true`, если пароль соответствует требованиям сложности, иначе `false`.
     */
    isStrongPassword(password: string): boolean;
}

/**
 * Интерфейс для валидации учетных данных пользователя.
 */
interface IAuthValidation extends IValidation {
    /**
     * Проверяет правильность введенных учетных данных (логин и пароль).
     * @param username - Имя пользователя.
     * @param password - Пароль пользователя.
     * @returns `true`, если учетные данные верны, иначе `false`.
     */
    validateCredentials(username: string, password: string): boolean;
}

/**
 * Интерфейс для проверки имени пользователя.
 */
interface IUserValidation extends IValidation {
    /**
     * Проверяет, является ли имя пользователя допустимым.
     * @param username - Имя пользователя для проверки.
     * @returns `true`, если имя пользователя валидное, иначе `false`.
     */
    isValidUsername(username: string): boolean;
}
