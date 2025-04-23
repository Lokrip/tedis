"use client"
import {Fragment, ReactNode, useEffect, useRef} from 'react';

import styles from './paginationInfiniteScrolling.module.scss';
import { IPaginationResponse } from '@/types/app/models/IPaginationResponse.type';
import { IModelPrimary } from '@/types/app/models/IModelPrimary.type';
import { RootState } from '@/redux/redux';
import SkeletonSingleProductCard from '@/widgets/ui/elements/skeleton/SkeletonSingleProductCard';
import { useAppSelector } from '@/utils/hooks';


export interface PaginationInfiniteScrollingProps<
    T,
    DataFunApiPaginationAttributes
> {
    initialData: T[];

    getData: (pagination: DataFunApiPaginationAttributes) => Promise<IPaginationResponse<T>>;
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
    DataFunApiPaginationAttributes,
>({
    getData,
    mapItems,
    limit,
    initialData,
    totalDataCount,
    actions,
    selectors,
    classNameListDataContainer
}: PaginationInfiniteScrollingProps<
    T,
    DataFunApiPaginationAttributes
>) => {
    const { dataSelector, currentPageSelector, fetchingSelector } = selectors;
    const { setDataList, incrementCurrentPage, changeTypeFetching } = actions;

    const COUNT_CARD_LOADER = 6

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

        if(
            action.scrollHeight - (action.scrollTop + window.innerHeight) < 600
            && !fetching
            && hasMoreData()
        ) {
            console.log("yes")
            changeTypeFetching(true);
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
        const { results } = await getData(pagintaion);
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

        {hasMoreData() && COUNT_CARD_LOADER > 0 && (
            <div className={styles.productCardSkeletonList}>
                {Array.from({ length: COUNT_CARD_LOADER }).map((_, index) => (
                    <SkeletonSingleProductCard key={index} />
                ))}
            </div>
        )}
        </>
    );
};

export default PaginationInfiniteScrolling;
