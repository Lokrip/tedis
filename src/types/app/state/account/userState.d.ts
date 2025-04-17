interface UserStatusErrorType {
    isError: boolean;
    errorMessage: string | null;
}

interface UserStatusSuccessType {
    isSuccess: boolean;
    result: string | null;
}


interface UserStatusType extends UserStatusErrorType, UserStatusSuccessType {
    isDispatchRequest?: boolean;
}

interface AuthTypeFields {
    email: string;
    password: string;
}

interface UserTypeFields {
    fistName: string;
    lastName: string;
}

type AuthState = UserStatusType & AuthTypeFields;


interface SignUpTypeFields extends AuthTypeFields, UserTypeFields, UserStatusErrorType, UserStatusSuccessType {
    username?: string;
}

interface SignInTypeFields extends AuthTypeFields, UserStatusErrorType, UserStatusSuccessType  {
    username?: string;
}
