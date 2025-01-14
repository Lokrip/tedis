import {FC, FormEvent, memo, PropsWithChildren} from 'react';

import styles from './form.module.scss';
import { correctClass } from '../../../utils';

interface FormProps extends PropsWithChildren {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    className?: string;
}

const Form: FC<FormProps> = ({children, className, onSubmit}) => {
    const classNameValid = correctClass(styles.form, className!);
    return (
        <form onSubmit={onSubmit} className={classNameValid}>
            {children}
        </form>
    );
};

export default memo(Form);