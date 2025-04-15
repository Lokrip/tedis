"use client";
import Auth from '@/features/Auth/Auth';
import Link from 'next/link';
import { FC, Suspense } from 'react';
import styles from "./loginForm.module.scss";
import authStyles from "./authForm.module.scss";
import ButtonSet from '../elements/button/ButtonSet';
import AuthForm from './AuthForm';
import pages from '@/entities/route';

type LoginFormProps = object;

const LoginForm: FC<LoginFormProps> = () => {
    return (
        <AuthForm>
            <Suspense>
                <Auth type="Login"/>
            </Suspense>
            <div className="social-auth">
                {/* <GoogleButton>
                    Google
                </GoogleButton> */}
            </div>
            <div className={styles.authenticationOrText}>
                <span className={styles.text}>or</span>
            </div>
            <Link href={pages.account.register} className={authStyles.authenticationProperties}>
                <ButtonSet buttonType="secondary">
                    Create a new account
                </ButtonSet>
            </Link>
        </AuthForm>
    );
};

export default LoginForm;
