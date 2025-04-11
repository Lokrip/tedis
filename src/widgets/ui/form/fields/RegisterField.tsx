import {FC} from 'react';

import styles from './registerField.module.scss';
import { KeyRound, Mail, UserRound } from 'lucide-react';
import Field from '@/widgets/ui/form/fields/Field';
import { IAuthFieldsEvent } from '@/types/app/auth.types';
import SelectField from '@/widgets/ui/form/fields/SelectField';
import { countryApi } from '@/redux/services/country/CountryService';
import MenuItem from './MenuItem';
import clsx from 'clsx';

type RegisterFieldProps = IAuthFieldsEvent

const RegisterField: FC<RegisterFieldProps> = ({register, errors}) => {
    const {data, isLoading, isSuccess, isError} = countryApi.useFetchAllCountryQuery()
    return (
        <>
        <div className={clsx(styles.fieldNames, "flex-center")}>
            <div className={styles.field}>
                <Field
                    isStyle={true}
                    // {...register("first_name")}
                    type="text"
                    placeholder="First Name..."
                    Icon={UserRound}
                />
                {errors.first_name && <p className="error">{errors.first_name.message}</p>}
            </div>
            <div className={styles.field}>
                <Field
                    isStyle={true}
                    // {...register("last_name")}
                    type="text"
                    placeholder="Last Name..."
                    Icon={UserRound}
                />
                {/* {errors.password && <p className="error">{errors.last_name.message}</p>} */}
            </div>
        </div>
        <div className={clsx(styles.placeOfResidence, "flex-center")}>
            <div className={styles.field}>
                {!data || isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <SelectField label="Страны" name="country">
                        {data.map(country => (
                            <MenuItem key={country.code} value={country.name}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </SelectField>
                )}
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
