import {FC} from 'react';

import styles from './loginField.module.scss';
import { KeyRound, Mail } from 'lucide-react';
import Field from '@/components/ui/form/fields/Field';
import { IAuthFieldsEvent } from '@/types/app/auth.types';

interface LoginFieldProps extends IAuthFieldsEvent {}

const LoginField: FC<LoginFieldProps> = ({register, errors}) => {
    return (
        <>
         <div className={styles.loginField}>
            <Field
                {...register("email")}
                type="text"
                placeholder="Email..."
                Icon={Mail}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className={styles.loginField}>
            <Field
                {...register("password")}
                type="password"
                placeholder="Password..."
                Icon={KeyRound}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
        </div></>
    );
};

export default LoginField;
