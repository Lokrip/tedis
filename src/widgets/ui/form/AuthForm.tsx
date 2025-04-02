import {FC, PropsWithChildren} from 'react';

import styles from './authForm.module.scss';

interface AuthFormProps extends PropsWithChildren {}

const AuthForm: FC<AuthFormProps> = ({children}) => {
    return (
        <div className={styles.authForm}>
            {children}
        </div>
    );
};

export default AuthForm;
