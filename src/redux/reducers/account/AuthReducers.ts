import { PayloadAction } from "@reduxjs/toolkit"
import { AuthStatus } from "@/types/app/enum/auth.enum"

export const savingSucess = (resultStatus: AuthStatus) => (state: AuthState) => {
    state.isSuccess = true;
    state.result = resultStatus;
}

export const savingErrors = (state: AuthState, action: PayloadAction<UserStatusErrorType>) => {
    if (action.payload.isError) {
        state.isSuccess = false;
        state.isError = action.payload.isError;
        state.errorMessage = action.payload.errorMessage;
        state.result = AuthStatus.NotAuthenticated;
    }
};

export const saveEmailInFields = (state: AuthState, action: PayloadAction<string>) => {
    state.email = action.payload;
};

export const savePasswordInFields = (state: AuthState, action: PayloadAction<string>) => {
    state.password = action.payload;
};
