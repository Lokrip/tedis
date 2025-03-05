import {FC} from 'react';

import styles from './field.module.scss';
import { KeyRound, Mail } from 'lucide-react';
import Field from '@/components/ui/form/fields/Field';
import { IAuthFieldsEvent } from '@/types/app/auth.types';

interface RegisterFieldProps extends IAuthFieldsEvent {}

const RegisterField: FC<RegisterFieldProps> = ({register}) => {
    return (
        <>
         <div className={styles.field}>
            <Field
                type="text"
                placeholder="Email..."
                Icon={Mail}
                {...register("email")}
            />
        </div>
        <div className={styles.field}>
            <Field
                type="password"
                placeholder="Password..."
                Icon={KeyRound}
                {...register("password")}
            />
        </div></>
    );
};

export default RegisterField;
