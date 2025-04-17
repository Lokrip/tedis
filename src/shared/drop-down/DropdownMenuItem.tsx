import {FC} from 'react';

import styles from './dropdownMenuItem.module.scss';
import { DropdownMenuItemProps } from './dropdownMenuItem.type';

const DropdownMenuItem: FC<DropdownMenuItemProps> = ({Icon, content}) => {
    return (
        <div className={styles.dropdownMenuItem}>
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );
};

export default DropdownMenuItem;
