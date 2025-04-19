import Link from "next/link";
import { Item } from "@/widgets/ui/list/item/Item";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import pages from "@/entities/route";
import styles from "../_style/categories-item.module.scss";
import { CategoriesItemProps } from "./categories-item-type";



export function CategoriesItem({banner, handlerMouseEnter, Icon}: CategoriesItemProps) {
    return (
        <Link
            onMouseEnter={() => handlerMouseEnter?.(banner)}
            className={clsx(styles.menuListCard, styles.menuListCardHeader)}
            href={pages.product.productByCategoryFilter(banner.slug as string)}
        >
            <Item className={styles.menuItems}>
                <Icon />
                {banner.title}
            </Item>
            <ArrowRight className={styles.rightIcon} />
        </Link>
    )
}
