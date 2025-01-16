import {ElementType, FC} from 'react';

import styles from './searchMenu.module.scss';
import { List } from '@/components/ui/list/List';
import { Search } from 'lucide-react';
import { Item } from '@/components/ui/list/item/Item';
import { getIconComponent } from '@/utils';

interface SearchMenuProps {
    searchParam: string;
}

const SearchMenu: FC<SearchMenuProps> = ({searchParam}) => {
    return (
        <div className={styles.searchMenu}>
            <List
                className={styles.searchMenuList}
                items={[
                    {id: 1, label: "eqweq"},
                    {id: 2, label: "eqweq"},
                    {id: 3, label: "eqweq"},
                    {id: 4, label: "eqweq"},
                    {id: 5, label: "eqweq"},
                    {id: 6, label: "eqweq"},
                ]}
                mapItems={(item) => {
                    let IconComponent: ElementType
                    
                    if(item.icon) {
                        IconComponent = getIconComponent(item.icon); 
                    } else {
                        IconComponent = getIconComponent("Search")
                    }
                    return (
                        <div className={styles.searchMenuItemContainer}>
                            <IconComponent />
                            <Item className={styles.searchMenuItem}>
                                {item.label}
                            </Item>
                        </div>
                    )
                }}
            />
        </div>
    );
};

export default SearchMenu;