import { HeadingH } from "@/components/plagins/H.number"
import ButtonSet from "@/components/ui/elements/button/ButtonSet"
import Field from "@/components/ui/form/fields/Field"
import { Key, Mail } from "lucide-react"
import React, { FC, FormEvent } from "react"

type TypeAuthMethod = 'Login' | 'Register'

interface IAuth {
    type?: TypeAuthMethod
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

interface TypeAuthFields {
    Login: React.FC,
    Register: React.FC,
}

const RegisterAuthFields: FC = () => {
    return (
        <Field placeholder="Email Address" type="email" Icon={Mail} />  
    )
}

const LoginAuthFields: FC = () => {
    return (
        <>
            <Field placeholder="Username" name="username" type="text" Icon={Mail} />  
            <Field placeholder="Password" name="password" type="password" Icon={Key} />  
        </>
    )
}

const authFields: TypeAuthFields = {
    Login: LoginAuthFields,
    Register: RegisterAuthFields
}

export default function Auth<P extends IAuth>({ type, onSubmit }: P) {
    const Fields = authFields[type!];

    return (
        <div>
            <form onSubmit={onSubmit} action="">
                <div className="authTitle">
                    <HeadingH level={1} content={type as string} />
                </div>  

                <div className="fields">
                    <Fields/>
                </div>

                <ButtonSet buttonType="primary" type="submit">
                    {type === 'Login' ? 'Войти' : 'Зарегистрироваться'}
                </ButtonSet>
            </form>
        </div>
    )
}