import { AuthStatus } from "@/types/app/enum/auth.enum";
import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from "@reduxjs/toolkit";

const authReducersActionType: ValidateSliceCaseReducers<UserState, SliceCaseReducers<UserState>> = {
    savingErrors(state, action: PayloadAction<UserStatusErrorType>) {
        if(action.payload.isError) {
            state.isSuccess = false;
            state.isError = action.payload.isError
            state.errorMessage = action.payload.errorMessage
            state.result = AuthStatus.NotAuthenticated
        }
    },

    saveEmailInFields(state, action: PayloadAction<string>) {
        state.email = action.payload;
    },

    savePasswordInFields(state, action: PayloadAction<string>) {
        state.password = action.payload;
    },

    changeDispatchRequest(state, action: PayloadAction<boolean>) {
        state.isDispatchRequest = action.payload
    },
}

export default authReducersActionType;
