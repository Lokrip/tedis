import {FC} from 'react';

import styles from './dropdownMenu.module.scss';
import DropdownMenuItem from './DropdownMenuItem';
import { Settings } from 'lucide-react';

interface DropdownMenuProps {}

const DropdownMenu: FC<DropdownMenuProps> = () => {
    return (
        <div className={styles.dropdownMenu}>
            <DropdownMenuItem Icon={Settings} content={"Settings"} />
            <DropdownMenuItem Icon={Settings} content={"Settings"} />
            <DropdownMenuItem Icon={Settings} content={"Settings"} />
            <DropdownMenuItem Icon={Settings} content={"Settings"} />
            <DropdownMenuItem Icon={Settings} content={"Settings"} />
            <DropdownMenuItem Icon={Settings} content={"Settings"} />
        </div>
    );
};

export default DropdownMenu;
