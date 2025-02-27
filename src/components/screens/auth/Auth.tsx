"use client"
import { HeadingH } from "../../plagins/H.number"
import ButtonSet from "../../ui/elements/button/ButtonSet"
import styles from "./auth.module.scss"
import Field from "../../ui/form/fields/Field"
import { KeyRound, Mail } from "lucide-react"
import React, { ChangeEvent, FC, FormEvent, useEffect } from "react"
import Form from "@/components/ui/form/Form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authenticationSchema } from "@/validation"
import { useRouter } from "next/navigation"
import { useActions, useAppSelector } from "@/hooks"


type TypeAuthMethod = 'Login' | 'Register'

interface IAuthFieldsEvent {
    onChangeEmail?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface IAuth extends IAuthFieldsEvent {
    type?: TypeAuthMethod
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


interface TypeAuthFields {
    Login: React.FC<IAuthFieldsEvent>,
    Register: React.FC<IAuthFieldsEvent>,
}

const RegisterAuthFields: FC<IAuthFieldsEvent> = ({onChangeEmail, onChangePassword}) => {
    return (
        <>
         <div className={styles.loginField}>
            <Field
                type='text'
                name="email"
                placeholder='Email...'
                Icon={Mail}
            />
        </div>
        <div className={styles.loginField}>
            <Field
                type='password'
                name="password"
                placeholder='Password...'
                Icon={KeyRound}
            />
        </div>
        </>
    )
}

const LoginAuthFields: FC<IAuthFieldsEvent> = ({onChangeEmail, onChangePassword}) => {
    return (
        <>
            <Field
                placeholder="Email"
                name="email"
                type="text"
                Icon={Mail}
                onChange={onChangeEmail}
            />
            <Field
                placeholder="Password"
                name="password"
                type="password"
                Icon={KeyRound}
                onChange={onChangePassword}
            />
        </>
    )
}

const authFields: TypeAuthFields = {
    Login: LoginAuthFields,
    Register: RegisterAuthFields
}

export default function Auth<P extends IAuth>({ type, onSubmit, onChangeEmail, onChangePassword }: P) {
    const {push} = useRouter()
    const {saveEmailInFields, savePasswordInFields, savingErrors} = useActions()
    const {email, password, errorMessage, isError} = useAppSelector(state => state.signInReduser)

    const {handleSubmit} = useForm({
        resolver: zodResolver(authenticationSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

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
                push(pages.home)
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
    }, [])

    const Fields = authFields[type!];

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="authTitle">
                <HeadingH level={1} content={type as string} />
            </div>
            <div className="fields">
                <Fields
                    onChangeEmail={onChangeEmail}
                    onChangePassword={onChangePassword}
                />
            </div>
            <ButtonSet buttonType="primary" type="submit">
                {type === 'Login' ? 'Войти' : 'Зарегистрироваться'}
            </ButtonSet>
        </Form>
    )
}
