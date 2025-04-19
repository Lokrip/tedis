import { catalogParamApi } from "@/redux/services/shop/CatalogService";
import { getIconComponent } from "@/utils/utils";
import { HeadingH } from "@/widgets/plagins/H.number";
import SkeletonCategoryCard from "@/widgets/ui/elements/skeleton/SkeletonCategoryCard";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CategoriesListProps } from "./categories-list-type";
import styles from "./_style/categories-list.module.scss"
import { List } from "@/widgets/ui/list/List";
import { CategoriesItem } from "./_ui/categories-item";

export function CategoriesList({isOpen, classActive}: CategoriesListProps) {
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
                        <CategoriesItem
                            banner={item}
                            handlerMouseEnter={handlerMouseEnter}
                            Icon={IconComponent}
                        />
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
                                <CategoriesItem
                                    banner={item}
                                    Icon={IconComponent}
                                />
                            )
                        }}
                    />
                </div>
            )}
        </div>
    )
}
