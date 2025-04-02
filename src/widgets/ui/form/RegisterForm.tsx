import {FC} from 'react';

import styles from './registerForm.module.scss';
import Auth from '@/features/Auth/Auth';
import AuthForm from './AuthForm';

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
    return (
        <AuthForm>
            <Auth type="Register" />
            <div className="social-auth">
                {/* <GoogleButton>
                    Google
                </GoogleButton> */}
            </div>
        </AuthForm>
    );
};

export default RegisterForm;
