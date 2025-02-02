"use client"
import {Fragment, ReactNode, useEffect, useRef} from 'react';

import styles from './paginationInfiniteScrolling.module.scss';
import {useAppSelector } from '@/hooks';
import { IPaginationResponse } from '@/types/app/models/IPaginationResponse.type';
import { IModelPrimary } from '@/types/app/models/IModelPrimary.type';
import { RootState } from '@/redux/store';
import SkeletonProductCard from '@/components/ui/elements/skeleton/SkeletonProductCard';


export interface PaginationInfiniteScrollingProps<
    T,
    DataFunApiSearchAttributes,
    DataFunApiPaginationAttributes
> {
    searchQuery: DataFunApiSearchAttributes;
    initialData: T[];

    getData: (
        search: DataFunApiSearchAttributes,
        pagination: DataFunApiPaginationAttributes
    ) => Promise<IPaginationResponse<T>>;

    limit: number;
    totalDataCount: number;

    selectors: {
        dataSelector: (state: RootState) => T[],
        currentPageSelector: (state: RootState) => number;
        fetchingSelector: (state: RootState) => boolean;
    }

    actions: {
        setDataList: (data: T[]) => void;
        incrementCurrentPage: (page: number) => void;
        changeTypeFetching: (isFetching: boolean) => void;
    }

    classNameListDataContainer: string;
    mapItems: (item: T) => ReactNode;
}

const PaginationInfiniteScrolling = <
    T extends IModelPrimary,
    DataFunApiSearchAttributes,
    DataFunApiPaginationAttributes,
>({
    getData,
    mapItems,
    limit,
    initialData,
    totalDataCount,
    actions,
    selectors,
    searchQuery,
    classNameListDataContainer
}: PaginationInfiniteScrollingProps<
    T,
    DataFunApiSearchAttributes,
    DataFunApiPaginationAttributes
>) => {
    const { dataSelector, currentPageSelector, fetchingSelector } = selectors;
    const { setDataList, incrementCurrentPage, changeTypeFetching } = actions;


    const data = useAppSelector(dataSelector);
    const currentPage = useAppSelector(currentPageSelector);
    const fetching = useAppSelector(fetchingSelector);

    const hasMoreData = () => {
        const recievedCount = limit * currentPage
        return recievedCount < totalDataCount
    }

    useEffect(() => {
        setDataList(initialData)
    }, [initialData])

    const scrollHandler = (event: Event) => {
        const action = document.documentElement;

        if(action.scrollHeight - (action.scrollTop + window.innerHeight) < 100) {
            if(!fetching && hasMoreData()) {
                changeTypeFetching(true);
            }
        }
    }

    useEffect(() => {
        if(fetching && hasMoreData()) {
            fetchMoreData();
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)

        return () => {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [])


    const fetchMoreData = async () => {
        const nextPage = currentPage + 1;
        const pagintaion = {
            isPagination: true,
            currentPage: nextPage!
        } as DataFunApiPaginationAttributes
        const { results } = await getData(searchQuery, pagintaion);
        setDataList([...data, ...results]);
        incrementCurrentPage(nextPage);

        changeTypeFetching(false);
    }

    return (
        <>
        <div className={classNameListDataContainer}>
            {data.map(item => (
                <Fragment key={item.id}>
                    {mapItems(item)}
                </Fragment>
            ))}
        </div>

        {hasMoreData() ? (
            <div className='product-card-skeleton-list'>
                <SkeletonProductCard />
            </div>
        ) : (
            <span className="text-center block p-10">No more posts</span>
        )}
        </>
    );
};

export default PaginationInfiniteScrolling;
