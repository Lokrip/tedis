"use client"
import { useActions, useAppSelector } from "@/hooks";
import Auth from "../../../../components/screens/auth/Auth";
import GoogleButton from "../../../../components/screens/auth/button/GoogleButton";
import { ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const {saveEmailInFields, savePasswordInFields, savingErrors} = useActions()
    const {email, password, errorMessage, isError} = useAppSelector(state => state.signInReduser)

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(email && password) {
            const result = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
            })

            if(result?.error) {
                savingErrors({
                    isError: true,
                    errorMessage: result.error
                })
            } else {
                console.log(result)
            }

        } else {
            savingErrors({
                isError: true,
                errorMessage: "Enter email or password!"
            })
        }
    }

    const onChangeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
        saveEmailInFields(event.target.value)
    }

    const onChangePasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        savePasswordInFields(event.target.value)
    }

    return (
        <div>
            <Auth
                onSubmit={onSubmit}
                onChangeEmail={onChangeEmailHandler}
                onChangePassword={onChangePasswordHandler}
                type="Login"
            />
            {isError && (
                <div className="error__container-message error__container--form">
                    <p className="error__message">{errorMessage}</p>
                </div>
            )}

            <div className="social-auth">
                {/* <GoogleButton>
                    Google
                </GoogleButton> */}
            </div>
        </div>
    )
}
