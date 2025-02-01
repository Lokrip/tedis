"use client"
import {Fragment, ReactNode, useEffect, useRef} from 'react';

import styles from './paginationInfiniteScrolling.module.scss';
import {useAppSelector } from '@/hooks';
import { IPaginationResponse } from '@/types/app/models/IPaginationResponse.type';
import { IModelPrimary } from '@/types/app/models/IModelPrimary.type';
import { RootState } from '@/redux/store';


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
    }
    actions: {
        setDataList: (data: T[]) => void;
        incrementCurrentPage: (page: number) => void;
    }

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
    searchQuery
}: PaginationInfiniteScrollingProps<
    T,
    DataFunApiSearchAttributes,
    DataFunApiPaginationAttributes
>) => {
    const { dataSelector, currentPageSelector } = selectors;
    const { setDataList, incrementCurrentPage } = actions;

    const observerElem = useRef(null);

    const data = useAppSelector(dataSelector)
    const currentPage = useAppSelector(currentPageSelector)

    const hasMoreData = () => {
        const recievedCount = limit * currentPage
        return recievedCount < totalDataCount
    }

    useEffect(() => {
        setDataList(initialData)
    }, [initialData])

    useEffect(() => {
        //window.IntersectionObserver — это встроенный в JavaScript API, который позволяет отслеживать видимость элемента относительно родительского контейнера или вьюпорта
        //Позволяет определить, когда элемент появляется или исчезает из видимой области экрана.
        //Работает асинхронно, что делает его эффективным для задач, связанных с производительностью (например, ленивой загрузки изображений).
        //Может отслеживать пересечение элемента с любой другой областью, а не только с вьюпортом.
        //если элемент выйдет из области просмотра (при прокрутке вниз/вверх), IntersectionObserver вызовет колбэк и передаст в него entries, где будет entry.isIntersecting: false.
        if(typeof window === "undefined" || !window.IntersectionObserver) return;
        const element = observerElem.current;

        //threshold = порог = 0
        const option = { threshold: 0 };

        const observer = new IntersectionObserver(handleObserver, option)
        if(element) observer.observe(element);

        return () => {if(element) observer.unobserve(element)};
    }, [currentPage])


    const fetchMoreData = async () => {
        const nextPage = currentPage + 1;
        const pagintaion = {
            isPagination: true,
            currentPage: nextPage!
        } as DataFunApiPaginationAttributes
        const { results } = await getData(searchQuery, pagintaion);
        setDataList([...data, ...results]);
        incrementCurrentPage(nextPage);
    }

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
        const [target] = entries;
        if(target.isIntersecting && hasMoreData()) {
            fetchMoreData()
        }
    }

    return (
        <>{data.map(item => (
            <Fragment key={item.id}>
                {mapItems(item)}
            </Fragment>
        ))}

        {hasMoreData() ? (
            <span ref={observerElem} className="text-center block py-10">Loading...</span>
        ) : (
            <span className="text-center block p-10">No more posts</span>
        )}
        </>
    );
};

export default PaginationInfiniteScrolling;
