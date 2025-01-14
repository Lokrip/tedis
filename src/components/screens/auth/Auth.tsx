import { HeadingH } from "../../plagins/H.number"
import ButtonSet from "../../ui/elements/button/ButtonSet"
import Field from "../../ui/form/fields/Field"
import { Key, Mail } from "lucide-react"
import React, { ChangeEvent, FC, FormEvent } from "react"

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
         <Field 
            placeholder="Email Address" 
            type="email" 
            Icon={Mail} 
            onChange={onChangeEmail} 
         />
         <Field 
            placeholder="Password" 
            type="password" 
            Icon={Key} 
            onChange={onChangePassword} 
         />
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
                Icon={Key} 
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
    const Fields = authFields[type!];

    return (
        <div>
            <form onSubmit={onSubmit} action="">
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
            </form>
        </div>
    )
}