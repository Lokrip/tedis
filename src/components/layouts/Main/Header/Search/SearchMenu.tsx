import {ElementType, FC, useEffect} from 'react';

import styles from './searchMenu.module.scss';
import { List } from '@/components/ui/list/List';
import { Item } from '@/components/ui/list/item/Item';
import { getIconComponent, truncate_string } from '@/utils';
import { searchParamApi } from '@/redux/services/header/SearchService';
import { ISearchParam } from '@/types/app/models/ISearchParam.type';
import SkeletonSearchParam from '@/components/ui/elements/skeleton/SkeletonSearchParam';
import clsx from 'clsx';

interface SearchMenuProps {
    searchParam: string;
}

interface SearchMenuListProps {
    searchParamList: ISearchParam[];
}

const SearchMenuList: FC<SearchMenuListProps> = ({searchParamList}) => {
    return (
        <List
            className={styles.searchMenuList}
            items={searchParamList}
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
                            {truncate_string(item.name, 50)}
                        </Item>
                    </div>
                )
            }}
        />
    )
}

const SearchMenu: FC<SearchMenuProps> = ({searchParam}) => {
    const {
        data: searchParamList,
        isLoading: isLoadingSearchParamList
    } = searchParamApi.useFetchAllSearchParamQuery(searchParam, {

    });

    useEffect(() => {
        console.log(searchParamList)
    }, [searchParamList])

    return (
        <div className={clsx(styles.searchMenu, isLoadingSearchParamList ? styles.searchMenuLoading : "")}>
            {isLoadingSearchParamList ? (
                <SkeletonSearchParam />
            ) : (
                searchParamList &&
                <SearchMenuList searchParamList={searchParamList} />
            )}
        </div>
    );
};

export default SearchMenu;
