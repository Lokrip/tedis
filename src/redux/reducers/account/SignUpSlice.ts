import { createSlice } from "@reduxjs/toolkit"
import { AuthStatus } from "@/types/app/enum/auth.enum";
import { saveEmailInFields, savePasswordInFields, savingErrors, savingSucess } from "./AuthReducers";

const initialState: SignUpTypeFields = {
    email: "",
    password: "",
    isError: false,
    errorMessage: null,
    isSuccess: false,
    result: null,
    fistName: "",
    lastName: ""
}


export const SignUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        savingSuccess: savingSucess(AuthStatus.RegistrationSuccessful),
        savingErrors,
        saveEmailInFields,
        savePasswordInFields
    }
})

export default SignUpSlice.reducer;
