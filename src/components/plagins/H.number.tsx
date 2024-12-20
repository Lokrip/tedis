import { ClassNameType } from "@/types/react.type";
import { FC, PropsWithChildren } from "react";

type LevelHeading = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps {
    level: LevelHeading;
    content: string | number
}

const TagH1H2H3H4H5H6: FC<{level: LevelHeading} & PropsWithChildren & ClassNameType> = ({level, children, className}) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements // Динамическое определение тега. Таким образом, JSX.IntrinsicElements содержит описание всех HTML-элементов и их атрибутов.
    return (
        <Tag className={className}>{children}</Tag>
    )
}
    
export const HeadingH: FC<HeadingProps & ClassNameType> = ({level, content, className}) => {
    return <TagH1H2H3H4H5H6 className={className} level={level}>{content}</TagH1H2H3H4H5H6>
}