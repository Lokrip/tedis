import {FC} from 'react';

import styles from './auth.module.scss';
import registerStyles from './auth.module.scss';
import { KeyRound, Mail, UserRound } from 'lucide-react';
import Field from '@/widgets/ui/form/fields/Field';
import { IAuthFieldsEvent, RegisterFields } from '@/types/app/auth.types';
import SelectField from '@/widgets/ui/form/fields/SelectField';
import { countryApi } from '@/redux/services/country/CountryService';
import MenuItem from './MenuItem';
import clsx from 'clsx';
import { ICountry } from '@/types/app/models/ICountry.type';
import SkeletonField from '../../elements/skeleton/SkeletonField';

type RegisterFieldProps = IAuthFieldsEvent<RegisterFields>

const Fields: FC<RegisterFieldProps & {
    data: ICountry[]
}> = ({register, errors, data}) => {
    return <>
        <div className={clsx(styles.fieldNames, "flex-center")}>
            <div className={styles.field}>
                <Field
                    isStyle={true}
                    {...register("first_name")}
                    type="text"
                    placeholder="First Name..."
                    Icon={UserRound}
                    isError={!!errors.first_name}
                    error_message={errors.first_name && errors.first_name.message}
                />
            </div>
            <div className={styles.field}>
                <Field
                    isStyle={true}
                    {...register("last_name")}
                    type="text"
                    placeholder="Last Name..."
                    Icon={UserRound}
                    isError={!!errors.last_name}
                    error_message={errors.last_name && errors.last_name.message}
                />
            </div>
        </div>
        <div className={clsx(registerStyles.placeOfResidence, "flex-center")}>
            <div className={styles.field}>
                <Field
                    isStyle={true}
                    {...register("username")}
                    type="text"
                    placeholder="Username..."
                    Icon={Mail}
                    isError={!!errors.username}
                    error_message={errors.username && errors.username.message}
                />
            </div>
            <div className={styles.field}>
                <SelectField
                    label="Страны"
                    {...register("location")}
                >
                    {data.map(country => (
                        <MenuItem key={country.code} value={country.name}>
                            {country.name}
                        </MenuItem>
                    ))}
                </SelectField>
            </div>
        </div>
        <div className={styles.field}>
            <Field
                isStyle={true}
                {...register("email")}
                type="text"
                placeholder="Email..."
                Icon={Mail}
                isError={!!errors.email}
                error_message={errors.email && errors.email.message}
            />
        </div>
        <div className={styles.field}>
            <Field
                isStyle={true}
                {...register("password")}
                type="password"
                placeholder="Password..."
                Icon={KeyRound}
                isError={!!errors.password}
                error_message={errors.password && errors.password.message}
            />
        </div>
    </>
}

const SkeletonFields: FC = () => {
    return <>
        <div className={clsx(styles.fieldNames, "flex-center")}>
            <div className={styles.field}><SkeletonField/></div>
            <div className={styles.field}><SkeletonField/></div>
        </div>
        <div className={clsx(registerStyles.placeOfResidence, "flex-center")}>
            <div className={styles.field}><SkeletonField/></div>
            <div className={styles.field}><SkeletonField/></div>
        </div>
        <div className={styles.field}><SkeletonField/></div>
        <div className={styles.field}><SkeletonField/></div>
    </>
}

const RegisterField: FC<RegisterFieldProps> = ({register, errors}) => {
    const { data, isLoading, isError } = countryApi.useFetchAllCountryQuery()

    if( isLoading ) return <SkeletonFields />;
    if (isError || !data) return <h1>Ошибка загрузки стран</h1>;

    return (
        <Fields
            register={register}
            errors={errors}
            data={data}
        />
    );
};

export default RegisterField;
