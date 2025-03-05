"use client"
import { HeadingH } from "../../plagins/H.number"
import ButtonSet from "../../ui/elements/button/ButtonSet"
import styles from "./auth.module.scss"
import React, { useEffect } from "react"
import Form from "@/components/ui/form/Form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authenticationSchema } from "@/validation"
import { useRouter, useSearchParams } from "next/navigation"
import { useActions } from "@/hooks"
import { signIn } from "next-auth/react"
import pages from "@/service/route"
import { IAuth, TypeAuthFields } from "@/types/app/auth.types"
import LoginField from "./field/LoginField"
import RegisterField from "./field/RegisterField"


const authFields: TypeAuthFields = {
    Login: LoginField,
    Register: RegisterField
}

export default function Auth<P extends IAuth>({ type }: P) {
    const {push} = useRouter()
    const {savingErrors, modalClose} = useActions()
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
                modalClose()
                push(callbackRoute)
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


    return (
        <Form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.authTitle}>
                <HeadingH level={1} content={type as string} />
            </div>
            <div className="fields">
                <Fields errors={errors} register={register}/>
            </div>
            <ButtonSet className={styles.authButton} buttonType="primary" type="submit">
                {type === 'Login' ? 'Войти' : 'Зарегистрироваться'}
            </ButtonSet>
        </Form>
    )
}
