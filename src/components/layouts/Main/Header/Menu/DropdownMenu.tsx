import {FC} from 'react';

import styles from './dropdownMenu.module.scss';

interface DropdownMenuProps {}

const DropdownMenu: FC<DropdownMenuProps> = () => {
    return (
        <div className={styles.dropdownMenu}>
            Lorem ipsum dolor
        </div>
    );
};

export default DropdownMenu;
