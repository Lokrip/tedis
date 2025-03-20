"use client";
import Auth from '@/features/Auth/Auth';
import { FC, useEffect } from 'react';

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
