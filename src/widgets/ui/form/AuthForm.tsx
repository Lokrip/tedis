import {FC, PropsWithChildren} from 'react';

import styles from './authForm.module.scss';
import { ClassNameType } from '@/types/react.type';
import { correctClass } from '@/utils/utils';

type AuthFormProps = PropsWithChildren & ClassNameType

const AuthForm: FC<AuthFormProps> = ({children, className}) => {
    const classNameValid = correctClass(styles.authForm, className!);
    return (
        <div className={classNameValid}>
            {children}
        </div>
    );
};

export default AuthForm;
