import {FC} from 'react';

import styles from '../../auth.module.scss';
import { HeadingH } from '@/shared/plagins/H.number';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActions, useAppSelector } from '@/utils/hooks';
import { useForm } from 'react-hook-form';
import { LoginFields, LoginFormData } from '@/types/app/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthStatus } from '@/types/app/enum/auth.enum';
import { ClassNameType } from '@/types/react.type';
import { signIn } from 'next-auth/react';
import Form from '@/widgets/ui/form/Form';
import LoginField from '@/widgets/ui/form/fields/LoginField';
import ButtonSet from '@/widgets/ui/elements/button/ButtonSet';
import pages from '@/entities/route';
import { loginSchema } from './ui/login-zod';

const LoginAuth: FC<ClassNameType & {defaultValues: LoginFields}> = ({className, defaultValues}) => {
    const { push } = useRouter()
    const { isSuccess, result } = useAppSelector((state) => state.signInReduser)
    const {savingErrors, modalClose} = useActions()
    const searchParam = useSearchParams()
    const callbackRoute = searchParam.get("callback") || pages.home
    //Partial<T> — это встроенный дженерик тип в TypeScript, который делает все свойства типа T необязательными.
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: defaultValues
    });
    const onSubmit = async (data: LoginFormData) => {
        const { email, password } = data;
        if(email && password) {
            if(!isSuccess && result !== AuthStatus.Authenticated) {
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
            }
        } else {
            savingErrors({
                isError: true,
                errorMessage: "Enter email or password!"
            })
        }
    }
    return (
        <Form className={className} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.authTitle}>
                <HeadingH level={1} content={"Login"} />
            </div>
            <div className="fields">
                <LoginField errors={errors} register={register}/>
            </div>
            <ButtonSet className={styles.authButton} buttonType="primary" type="submit">
                Войти
            </ButtonSet>
        </Form>
    )
};

export default LoginAuth;
