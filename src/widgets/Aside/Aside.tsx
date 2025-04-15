import {FC, useEffect, useState} from 'react';

import clsx from 'clsx'

import { List } from "../ui/list/List"
import { Item } from "../ui/list/item/Item"

import { getIconComponent } from "../../utils/utils"
import { HeadingH } from "../plagins/H.number"
import ShadowBackground from "../ui/assets/shadowBackground/ShadowBackground"

import styles from './aside.module.scss';
import { catalogParamApi } from '@/redux/services/shop/CatalogService';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import pages from '@/entities/route';
import SkeletonCategoryCard from '@/widgets/ui/elements/skeleton/SkeletonCategoryCard';

interface AsideProps {
    isOpen: boolean;
    close: (action: boolean) => void;
}

const Aside: FC<AsideProps> = ({isOpen, close}) => {
    const [detailCategoryState, setDetailCategoryState] = useState({
        children: [],
        title: null,
    });
    const CATEGORY_CARD_LOADING = 10
    const [isShowDetailList, setIsShowDetailList] = useState(false);
    const {data: categories, isLoading: isLoadingCategories} = catalogParamApi.useFetchAllCategoryParamQuery(
        undefined,
        {skip: !isOpen}
    );

    const handlerCloseMenu = () => {close(false)}

    const handlerMouseEnter = (item: any) => {
        if(item.children
            && (
                detailCategoryState.children != item.children
                && detailCategoryState.title != item.title
            )
        ) {
            setIsShowDetailList(true);
            setDetailCategoryState(prev => ({
                ...prev,
                children: item.children,
                title: item.title,
            }))
        }
    }

    useEffect(() => {
        console.log(detailCategoryState)
    }, [detailCategoryState])

    return (
        <aside className={clsx(
            styles.modelMenu,
            'fixed-full',
            'mixed-full-width',
            isOpen && styles.active
        )}>
            <ShadowBackground onClick={handlerCloseMenu} />
            {isLoadingCategories ? (
                <div className={
                    clsx(
                        "model-menu-items",
                        styles.modelMenuItemsHeader,
                        styles.modelMenuItemsHeaderLoading
                    )
                }>
                    {Array.from({ length: CATEGORY_CARD_LOADING }).map((_, index) => (
                        <SkeletonCategoryCard key={index} />
                    ))}
                </div>
            ) : (
                <div className={
                    clsx(
                        "model-menu-items",
                        styles.modelMenuItemsHeader,
                    )
                }>
                    <List
                        className={clsx("menu-list", styles.menuListHeader)}
                        items={categories}
                        mapItems={(item) => {
                            const IconComponent = getIconComponent(item.icon);
                            return (
                                <>
                                <Link
                                    onMouseEnter={() => handlerMouseEnter(item)}
                                    href={pages.product.productByCategoryFilter(item.slug)}
                                    className={clsx(styles.menuListCard, styles.menuListCardHeader)}
                                >
                                    <Item className={styles.menuItems}>
                                        <IconComponent />
                                        {item.title}
                                    </Item>
                                    <ArrowRight className={styles.rightIcon} />
                                </Link>
                                </>
                            )
                        }}
                    />
                    {isShowDetailList && (
                        <div className={styles.detailCategory}>
                            <HeadingH
                                className={styles.headingDetailCategory}
                                level={4}
                                content={detailCategoryState.title ?? "Detail Category"}
                            />
                            <List
                                className={clsx("menu-list", styles.menuListHeader)}
                                items={detailCategoryState.children}
                                mapItems={(item) => {
                                    const IconComponent = getIconComponent(item.icon);
                                    return (
                                        <>
                                        <Link
                                            href={pages.product.productByCategoryFilter(item.slug)}
                                            className={clsx(styles.menuListCard, styles.menuListCardHeader)}
                                        >
                                            <Item className={styles.menuItems}>
                                                <IconComponent />
                                                {item.title}
                                            </Item>
                                            <ArrowRight className={styles.rightIcon} />
                                        </Link>
                                        </>
                                    )
                                }}
                            />
                        </div>
                    )}
                </div>
            )}
        </aside>
    );
};

export default Aside;
