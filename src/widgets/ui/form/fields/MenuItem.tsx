import {FC, OptionHTMLAttributes, PropsWithChildren} from 'react';

import styles from './menuItem.module.scss';
import { correctClass } from '@/utils/utils';
import { ClassNameType } from '@/types/react.type';

interface MenuItemProps extends OptionHTMLAttributes<HTMLOptionElement>, PropsWithChildren {}

const MenuItem: FC<MenuItemProps> = ({className, children, ...props}) => {
    const classNameValid = correctClass(styles.menuItemField, className!)

    return (
        <option className={classNameValid} {...props}>
            {children}
        </option>
    );
};

export default MenuItem;
