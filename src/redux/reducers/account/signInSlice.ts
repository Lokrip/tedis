import { AuthStatus } from "@/types/app/enum/auth.enum";
import { createSlice } from "@reduxjs/toolkit"
import authReducersActionType from "./AuthReducers";

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
        savingSuccess(state) {
            state.isSuccess = true;
            state.result = AuthStatus.Authenticated;
        },
        ...authReducersActionType
    }
})


export default SignInSlice.reducer
