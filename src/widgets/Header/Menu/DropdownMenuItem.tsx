import {FC} from 'react';

import styles from './dropdownMenuItem.module.scss';
import { LucideIcon } from 'lucide-react';

interface DropdownMenuItemProps {
    Icon: LucideIcon;
    content: string;
}

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
