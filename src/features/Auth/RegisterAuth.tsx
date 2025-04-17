import {FC, Suspense} from 'react';

import styles from './auth.module.scss';
import { RegisterFields, RegisterFormData } from '@/types/app/auth.types';
import { ClassNameType } from '@/types/react.type';
import { HeadingH } from '@/widgets/plagins/H.number';
import Form from '@/widgets/ui/form/Form';
import ButtonSet from '@/widgets/ui/elements/button/ButtonSet';
import RegisterField from '@/widgets/ui/form/fields/RegisterField';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/entities/validation';
import { useActions, useAppSelector } from '@/utils/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import pages from '@/entities/route';

interface RegisterAuthProps {
    defaultValues: RegisterFields
}

const RegisterAuth: FC<ClassNameType & RegisterAuthProps> = ({className, defaultValues}) => {
    const { push } = useRouter()
    const { isSuccess, result } = useAppSelector((state) => state.signInReduser)
    const {savingErrors, modalClose} = useActions()
    const searchParam = useSearchParams()
    const callbackRoute = searchParam.get("callback") || pages.home
    //Partial<T> — это встроенный дженерик тип в TypeScript, который делает все свойства типа T необязательными.
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: defaultValues
    });
    const onSubmit = async (data: RegisterFormData) => {
        const { email, password } = data;
        if(email && password) {
            console.log(data)
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
                <Suspense fallback={<h1>Loading...</h1>}>
                    <RegisterField errors={errors} register={register}/>
                </Suspense>
            </div>
            <ButtonSet className={styles.authButton} buttonType="primary" type="submit">
                Зарегистрироваться
            </ButtonSet>
        </Form>
    )
};

export default RegisterAuth;
