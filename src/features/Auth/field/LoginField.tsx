import {FC} from 'react';

import styles from './field.module.scss';
import { KeyRound, Mail } from 'lucide-react';
import Field from '@/widgets/ui/form/fields/Field';
import { IAuthFieldsEvent } from '@/types/app/auth.types';

type LoginFieldProps = IAuthFieldsEvent

const LoginField: FC<LoginFieldProps> = ({register, errors}) => {
    return (
        <>
        <div className={styles.field}>
            <Field
                isStyle={true}
                className={styles.labelField}
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
                className={styles.labelField}
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
