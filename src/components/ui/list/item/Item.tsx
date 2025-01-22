import { ClassNameType } from "../../../../types/react.type";
import { correctClass } from "../../../../utils";
import { DOMAttributes, FC, PropsWithChildren } from "react";

interface ItemProps extends PropsWithChildren, ClassNameType, DOMAttributes<HTMLElement> {}

export const ItemContainer: FC<ItemProps> = ({children, className, ...props}) => {
    const classCorrect = correctClass('item', className!);

    return (
        <li {...props} className={classCorrect}>
            {children}
        </li>
    )
}

export const Item: FC<ItemProps> = ({children, className, ...props}) => {
    return (
        <ItemContainer {...props} className={className}>
            {children}
        </ItemContainer>
    )
}
