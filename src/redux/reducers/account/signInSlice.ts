import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: SignInTypeFields = {
    email: "",
    password: "",
    isError: false,
    errorMessage: null,
    isSuccess: false,
    result: null
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
                state.isError = action.payload.isError
                state.errorMessage = action.payload.errorMessage
            }
        },
    }
})


export default SignInSlice.reducer