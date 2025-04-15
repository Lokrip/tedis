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

    isDispatchRequest?: boolean;
}

interface UserTypeFields {
    fistName: string;
    lastName: string;
}

type UserState = AuthTypeFields & UserStatusType & UserTypeFields;


interface SignUpTypeFields extends AuthTypeFields, UserTypeFields, UserStatusType {
    username?: string;
}

interface SignInTypeFields extends AuthTypeFields, UserStatusType {
    username?: string;
}
