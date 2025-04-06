import {FC} from 'react';

import styles from './field.module.scss';
import { KeyRound, Mail, UserRound } from 'lucide-react';
import Field from '@/widgets/ui/form/fields/Field';
import { IAuthFieldsEvent } from '@/types/app/auth.types';

type RegisterFieldProps = IAuthFieldsEvent

const RegisterField: FC<RegisterFieldProps> = ({register, errors}) => {
    return (
        <>
        <div className={styles.fieldNames}>
            <div className={styles.field}>
                <Field
                    isStyle={true}
                    className={styles.labelField}
                    // {...register("first_name")}
                    type="text"
                    placeholder="First Name..."
                    Icon={UserRound}
                />
                {/* {errors.email && <p className="error">{errors.first_name.message}</p>} */}
            </div>
            <div className={styles.field}>
                <Field
                    isStyle={true}
                    className={styles.labelField}
                    // {...register("last_name")}
                    type="text"
                    placeholder="Last Name..."
                    Icon={UserRound}
                />
                {/* {errors.password && <p className="error">{errors.last_name.message}</p>} */}
            </div>
        </div>
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

export default RegisterField;
