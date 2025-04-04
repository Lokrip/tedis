import { AuthStatus } from "@/types/app/enum/auth.enum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: SignInTypeFields = {
    email: "",
    password: "",
    isError: false,
    errorMessage: null,
    isSuccess: false,
    result: null,
    isDispatchRequest: false
}

export const SignInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        saveEmailInFields(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },

        savePasswordInFields(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },

        savingErrors(state, action: PayloadAction<UserStatusErrorType>) {
            if(action.payload.isError) {
                state.isSuccess = false;
                state.isError = action.payload.isError
                state.errorMessage = action.payload.errorMessage
                state.result = AuthStatus.NotAuthenticated
            }
        },

        savingSuccess(state) {
            state.isSuccess = true;
            state.result = AuthStatus.Authenticated;
        },

        changeDispatchRequest(state, action: PayloadAction<boolean>) {
            state.isDispatchRequest = action.payload
        },

        
    }
})


export default SignInSlice.reducer
