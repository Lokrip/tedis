"use client";
import { FC, useEffect } from 'react';
import Auth from '@/components/screens/auth/Auth';
import { useActions, useAppSelector } from '@/hooks';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {

    return (
        <>
            <Auth type="Login"/>
            <div className="social-auth">
                {/* <GoogleButton>
                    Google
                </GoogleButton> */}
            </div>
        </>
    );
};

export default LoginForm;
