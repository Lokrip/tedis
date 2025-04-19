import { ICategory } from "@/types/app/models/ICategory";
import { ElementType, HTMLAttributes } from "react";


export interface CategoriesItemProps extends HTMLAttributes<HTMLAnchorElement> {
    Icon: ElementType;
    banner: ICategory;
    handlerMouseEnter?: (item: ICategory) => void;
}
