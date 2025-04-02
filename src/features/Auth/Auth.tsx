"use client"
import ButtonSet from "../../widgets/ui/elements/button/ButtonSet"
import styles from "./auth.module.scss"
import React, { useEffect } from "react"
import Form from "@/widgets/ui/form/Form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authenticationSchema } from "@/utils/validation"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import pages from "@/config/route"
import { IAuth, TypeAuthFields } from "@/types/app/auth.types"
import LoginField from "./field/LoginField"
import RegisterField from "./field/RegisterField"
import { AuthStatus } from "@/types/app/enum/auth.enum"
import { HeadingH } from "@/widgets/plagins/H.number"
import { useActions, useAppSelector } from "@/utils/hooks"
import { ClassNameType } from "@/types/react.type"
import { correctClass } from "@/utils/utils"


const authFields: TypeAuthFields = {
    Login: LoginField,
    Register: RegisterField
}

export default function Auth<P extends IAuth & ClassNameType>({ type, className }: P) {
    const { push } = useRouter()
    const { isDispatchRequest, isSuccess, result } = useAppSelector((state) => state.signInReduser)
    const {savingErrors, modalClose, changeDispatchRequest} = useActions()
    const searchParam = useSearchParams()
    const callbackRoute = searchParam.get("callback") || pages.home

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(authenticationSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = async (data: { email: string; password: string }) => {
        const { email, password } = data;
        if(email && password) {
            if(!isDispatchRequest
                && !isSuccess
                && result !== AuthStatus.Authenticated
            ) {
                changeDispatchRequest(true);
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
                    changeDispatchRequest(false);
                    modalClose()
                    push(callbackRoute)
                }
            }
        } else {
            savingErrors({
                isError: true,
                errorMessage: "Enter email or password!"
            })
        }
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    const Fields = authFields[type!];
    const classNameValid = correctClass(styles.authForm, className ?? "");
    return (
        <Form className={classNameValid} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.authTitle}>
                <HeadingH level={1} content={type as string} />
            </div>
            <div className="fields">
                <Fields errors={errors} register={register}/>
            </div>
            <ButtonSet disabled={isDispatchRequest} className={styles.authButton} buttonType="primary" type="submit">
                {isDispatchRequest
                ? (<p>Loading...</p>)
                : (type === 'Login' ? 'Войти' : 'Зарегистрироваться')}
            </ButtonSet>
        </Form>
    )
}
