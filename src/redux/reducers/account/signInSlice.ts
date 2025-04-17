import { AuthStatus } from "@/types/app/enum/auth.enum";
import { createSlice } from "@reduxjs/toolkit"
import { saveEmailInFields, savePasswordInFields, savingErrors, savingSucess } from "./AuthReducers";

const initialState: SignInTypeFields = {
    email: "",
    password: "",
    isError: false,
    errorMessage: null,
    isSuccess: false,
    result: null,
}

export const SignInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        savingSuccess: savingSucess(AuthStatus.Authenticated),
        savingErrors,
        saveEmailInFields,
        savePasswordInFields
    }
})


export default SignInSlice.reducer
