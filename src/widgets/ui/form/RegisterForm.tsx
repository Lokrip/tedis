import {FC, Suspense} from 'react';

import authStyles from "./authForm.module.scss";
import styles from "./registerForm.module.scss"
import Auth from '@/features/Auth/Auth';
import AuthForm from './AuthForm';
import Link from 'next/link';
import pages from '@/config/route';

type RegisterFormProps = object;

const RegisterForm: FC<RegisterFormProps> = () => {
    return (
        <AuthForm className={styles.authForm}>
            {/* Suspense в React — это компонент, который позволяет отображать запасной UI
             (например, спиннеры или лоадеры), пока данные или другие ресурсы не будут загружены.
             Он используется в сочетании с динамическим импортом или асинхронными запросами, чтобы
             отложить рендеринг части компонента до тех пор, пока все необходимые данные или модули
             не будут готовы.

             Suspense — это компонент в React, который позволяет "приостановить"
             рендеринг части компонента до тех пор, пока не будет завершена асинхронная
             операция, например, загрузка данных. Он помогает управлять асинхронными
             операциями и улучшать пользовательский опыт, показывая индикаторы загрузки
             (например, лоадеры) во время того, как компонент загружается параллейно от других компонентов.
             */}
            <Suspense>
                <Auth type="Register" />
            </Suspense>
            <div className={authStyles.authenticationProperties}>
                <Link className={styles.loginText} href={pages.account.login}>
                    У вас уже есть аккаунт?
                </Link>
            </div>
            <div className="social-auth">
                {/* <GoogleButton>
                    Google
                </GoogleButton> */}
            </div>
        </AuthForm>
    );
};

export default RegisterForm;
