interface UserStatusErrorType {
    isError: boolean;
    errorMessage: string | null;
}

interface UserStatusSuccessType {
    isSuccess: boolean;
    result: string | null;
}


interface UserStatusType extends UserStatusErrorType, UserStatusSuccessType {}

interface AuthTypeFields {
    email: string;
    password: string;
}

interface UserTypeFields {
    fistName: string;
    lastName: string;
    phone: string;
}


interface SignUpTypeFields extends AuthTypeFields, UserTypeFields, UserStatusType {
    password2: string;
    username: string;
}

interface SignInTypeFields extends AuthTypeFields, UserStatusType {
    username?: string;
    isClodeModalSignIn: boolean;
}
