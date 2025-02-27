"use client";
import {FC} from 'react';
import Auth from '@/components/screens/auth/Auth';

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
