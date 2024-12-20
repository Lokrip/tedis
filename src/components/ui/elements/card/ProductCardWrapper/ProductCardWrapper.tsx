import { ClassNameType } from "@/types/react.type";
import { attachSubComponents, correctClass } from "@/utils/utils";
import { FC, PropsWithChildren } from "react";

const MainCardTopWrap: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass('card__top-wrap', className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}

const MainCardMiddleWrap: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass('card__middle-wrap', className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}


const MainCardBottomWrap: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass('card__bottom-wrap', className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}

const ProductCardWrapperComponets: FC<PropsWithChildren & ClassNameType> = ({children, ...props}) => {
    return (
        <div id="product-card-wrapper">
            {children}
        </div>
    )
}

export const ProductCardWrapper = attachSubComponents(
    'ProductCardWrapper',
    ProductCardWrapperComponets,
    {
        "CardTopWrap": MainCardTopWrap,
        "CardMiddleWrap": MainCardMiddleWrap,
        "CardBottomWrap": MainCardBottomWrap
    }
)