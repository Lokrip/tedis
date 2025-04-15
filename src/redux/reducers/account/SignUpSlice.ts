import { createSlice } from "@reduxjs/toolkit"
import authReducersActionType from "./AuthReducers"
import { AuthStatus } from "@/types/app/enum/auth.enum";

const initialState: SignUpTypeFields = {
    email: "",
    password: "",
    isError: false,
    errorMessage: null,
    isSuccess: false,
    result: null,
    isDispatchRequest: false,
    fistName: "",
    lastName: ""
}


export const SignUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        savingSuccess(state) {
            state.isSuccess = true;
            state.result = AuthStatus.RegistrationSuccessful;
        },
        ...authReducersActionType
    }
})

export default SignUpSlice.reducer;
