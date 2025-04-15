import {FC} from 'react';

import styles from './auth.module.scss';
import { KeyRound, Mail } from 'lucide-react';
import Field from '@/widgets/ui/form/fields/Field';
import { IAuthFieldsEvent, LoginFields } from '@/types/app/auth.types';

type LoginFieldProps = IAuthFieldsEvent<LoginFields>

const LoginField: FC<LoginFieldProps> = ({register, errors}) => {
    return (
        <>
        <div className={styles.field}>
            <Field
                isStyle={true}
                {...register("email")}
                type="text"
                placeholder="Email..."
                Icon={Mail}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className={styles.field}>
            <Field
                isStyle={true}
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
