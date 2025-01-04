import { ClassNameType } from "@/types/react.type";
import { FC, PropsWithChildren } from "react";

type LevelHeading = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps {
    level: LevelHeading;
    content: string | number;
    maxLength?: number;
}

const TagH1H2H3H4H5H6: FC<{
    level: LevelHeading; 
    maxLength?: number
} & PropsWithChildren & ClassNameType> = ({
    level, 
    children, 
    className,
    maxLength
}) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements // Динамическое определение тега. Таким образом, JSX.IntrinsicElements содержит описание всех HTML-элементов и их атрибутов.
    
    const renderText = () => {
        if(typeof children === 'string' && maxLength && children.length > maxLength) {
            return `${children.slice(0, maxLength)}...`;
        }

        return children;
    }
    
    return (
        <Tag className={className}>{renderText()}</Tag>
    )
}
    
export const HeadingH: FC<HeadingProps & ClassNameType> = ({level, content, className, maxLength}) => {
    return <TagH1H2H3H4H5H6 
    className={className} 
    level={level}
    maxLength={maxLength}
    >{content}</TagH1H2H3H4H5H6>
}