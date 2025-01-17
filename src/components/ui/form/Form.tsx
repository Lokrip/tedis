import {FormEvent, forwardRef, memo, PropsWithChildren} from 'react';

import styles from './form.module.scss';
import { correctClass } from '../../../utils';

interface FormProps extends PropsWithChildren {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    className?: string;
}

const Form = forwardRef<HTMLFormElement, FormProps>(({children, className, onSubmit}, ref) => {
    const classNameValid = correctClass(styles.form, className!);
    return (
        <form ref={ref} onSubmit={onSubmit} className={classNameValid}>
            {children}
        </form>
    );
});

Form.displayName = 'Form';

export default memo(Form);