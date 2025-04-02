import {FC} from 'react';

import styles from './field.module.scss';
import { KeyRound, Mail } from 'lucide-react';
import Field from '@/widgets/ui/form/fields/Field';
import { IAuthFieldsEvent } from '@/types/app/auth.types';

interface RegisterFieldProps extends IAuthFieldsEvent {}

const RegisterField: FC<RegisterFieldProps> = ({register}) => {
    return (
        <>
        <div className={styles.fieldNames}>
            <div className={styles.field}>
                <Field
                    className={styles.labelField}
                    type="text"
                    placeholder="First Name..."
                    Icon={Mail}
                    {...register("email")}
                />
            </div>
            <div className={styles.field}>
                <Field
                    className={styles.labelField}
                    type="text"
                    placeholder="Last Name..."
                    Icon={Mail}
                    {...register("email")}
                />
            </div>
        </div>
        <div className={styles.field}>
            <Field
                className={styles.labelField}
                type="text"
                placeholder="Email..."
                Icon={Mail}
                {...register("email")}
            />
        </div>
        <div className={styles.field}>
            <Field
                className={styles.labelField}
                type="password"
                placeholder="Password..."
                Icon={KeyRound}
                {...register("password")}
            />
        </div></>
    );
};

export default RegisterField;
