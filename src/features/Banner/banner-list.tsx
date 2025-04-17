import pages from "@/entities/route";
import { catalogParamApi } from "@/redux/services/shop/CatalogService";
import { getIconComponent } from "@/utils/utils";
import { HeadingH } from "@/widgets/plagins/H.number";
import SkeletonCategoryCard from "@/widgets/ui/elements/skeleton/SkeletonCategoryCard";
import { Item } from "@/widgets/ui/list/item/Item";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BannersListProps } from "./banner-type";
import styles from "./_style/banner-list.module.scss"
import { List } from "@/widgets/ui/list/List";
import Link from "next/link";

export function BannersList({isOpen, classActive}: BannersListProps) {
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
        console.log(isLoadingCategories)
    }, [isLoadingCategories])


    if (isLoadingCategories) {
        return (
            <div className={
                clsx(
                    "model-menu-items",
                    styles.modelMenuItemsHeader,
                    styles.modelMenuItemsHeaderLoading,
                    isOpen && classActive && styles.active
                )
            }>
                {Array.from({ length: CATEGORY_CARD_LOADING }).map((_, index) => (
                    <SkeletonCategoryCard key={index} />
                ))}
            </div>
        )
    }

    console.log(isLoadingCategories, "RENDER")

    return (
        <div className={
            clsx(
                "model-menu-items",
                styles.modelMenuItemsHeader,
                isOpen && classActive && styles.active
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
    )
}
