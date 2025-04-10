import {FC, ReactNode, SelectHTMLAttributes} from 'react';

import styles from './selectField.module.scss';
import { ClassNameType } from '@/types/react.type';
import { correctClass } from '@/utils/utils';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement>, ClassNameType {
    children: ReactNode;
    label: string;
}

const SelectField: FC<SelectFieldProps> = ({children, className, label, ...props}) => {
    const classNameValid = correctClass(styles.selectField, className!)
    return (
        <select className={classNameValid} defaultValue="" {...props}>
            <option value="" disabled hidden>{label}</option>
            {children}
        </select>
    );
};

export default SelectField;
