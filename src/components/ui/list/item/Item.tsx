import { ClassNameType } from "../../../../types/react.type";
import { correctClass } from "../../../../utils";
import { FC, PropsWithChildren } from "react";


export const ItemContainer: FC<PropsWithChildren & ClassNameType> = ({children, className}) => {
    const classCorrect = correctClass('item', className!);
    
    return (
        <li className={classCorrect}>
            {children}
        </li>
    )
}

export const Item: FC<PropsWithChildren & ClassNameType> = ({children, className}) => {
    return (
        <ItemContainer className={className}>
            {children}
        </ItemContainer>
    )
}