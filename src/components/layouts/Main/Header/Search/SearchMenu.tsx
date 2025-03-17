import {ElementType, FC, useEffect} from 'react';

import styles from './searchMenu.module.scss';
import { List } from '@/components/ui/list/List';
import { Item } from '@/components/ui/list/item/Item';
import { getIconComponent, truncate_string } from '@/utils';
import { searchParamApi } from '@/redux/services/header/SearchService';
import { ISearchParam } from '@/types/app/models/ISearchParam.type';
import SkeletonSearchParam from '@/components/ui/elements/skeleton/SkeletonSearchParam';
import clsx from 'clsx';
import { Search } from 'lucide-react';

interface SearchMenuProps {
    searchParam: string;
}

interface SearchMenuListProps {
    searchParamList: ISearchParam[] | undefined;
}

const SearchMenuList: FC<
    SearchMenuListProps
    & SearchMenuProps
> = ({searchParamList, searchParam}) => {
    useEffect(() => {
        console.log(searchParamList?.length !== 0, "global!!!!!!!!!!!!!!!!!")
    }, [searchParamList])


    return searchParamList?.length !== 0 ? (
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
                            {truncate_string(item.query, 50)}
                        </Item>
                    </div>
                )
            }}
        />
    ) : (
        <div className={styles.searchMenuList}>
            <div className={styles.searchMenuItemContainer}>
                <Search />
                <div className={styles.searchMenuItem}>
                    {searchParam}
                </div>
            </div>
        </div>
    )
}

const SearchMenu: FC<SearchMenuProps> = ({searchParam}) => {
    const {
        data: searchParamList,
        isLoading: isLoadingSearchParamList,
        isError
    } = searchParamApi.useFetchAllSearchParamQuery(searchParam);

    return (
        <div className={clsx(styles.searchMenu, isLoadingSearchParamList || isError ? styles.searchMenuLoading : "")}>
            {isLoadingSearchParamList || isError ? (
                <SkeletonSearchParam />
            ) : (
                <SearchMenuList
                    searchParam={searchParam}
                    searchParamList={searchParamList}
                />
            )}
        </div>
    );
};

export default SearchMenu;
