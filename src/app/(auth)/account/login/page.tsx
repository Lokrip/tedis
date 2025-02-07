"use client"
import { useActions, useAppSelector } from "@/hooks";
import Auth from "../../../../components/screens/auth/Auth";
import GoogleButton from "../../../../components/screens/auth/button/GoogleButton";
import { ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import pages from "@/service/route";

export default function LoginPage() {
    const {saveEmailInFields, savePasswordInFields, savingErrors} = useActions()
    const {email, password, errorMessage, isError} = useAppSelector(state => state.signInReduser)

    const searchParams = useSearchParams()
    const {push} = useRouter();


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
                const callbackUrl = searchParams.get("callbackUrl") ?? pages.profile
                push(callbackUrl)
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
                <GoogleButton>
                    Google
                </GoogleButton>
            </div>
        </div>
    )
}
