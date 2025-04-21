import {ElementType, FC, useEffect} from 'react';

import styles from './searchMenu.module.scss';
import { List } from '@/shared/list/List';
import { Item } from '@/shared/list/item/Item';
import { getIconComponent, truncate_string } from '@/utils/utils';
import { searchParamApi } from '@/redux/services/header/SearchService';
import { ISearchParam } from '@/types/app/models/ISearchParam.type';
import SkeletonSearchParam from '@/widgets/ui/elements/skeleton/SkeletonSearchParam';
import clsx from 'clsx';
import { Search } from 'lucide-react';

interface SearchMenuProps {
    searchParam: string;
    findElement?: (search: string) => void;
}

interface SearchMenuListProps {
    searchParamList: ISearchParam[] | undefined;
}

const SearchMenuList: FC<
    SearchMenuListProps
    & SearchMenuProps
> = ({searchParamList, searchParam, findElement}) => {
    const onSearch = (item: any) => {
        if(findElement) {
            findElement(item.query);
        }
    }

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
                    <div onClick={() => onSearch(item)} className={styles.searchMenuItemContainer}>
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

const SearchMenu: FC<SearchMenuProps> = ({searchParam, findElement}) => {
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
                    findElement={findElement}
                    searchParam={searchParam}
                    searchParamList={searchParamList}
                />
            )}
        </div>
    );
};

export default SearchMenu;
