import { ClassNameType } from "@/types/react.type";
import { PropsWithChildren } from "react";

export type LevelHeading = 1 | 2 | 3 | 4 | 5 | 6
export type Content = string | number

export interface TagProps extends PropsWithChildren, ClassNameType {
    level: LevelHeading;
    maxLength?: number;
}

export interface HeadingProps extends PropsWithChildren, ClassNameType {
    level: LevelHeading;
    content: Content;
    maxLength?: number;
}

