import { ClassNameType } from "@/types/react.type";
import { PropsWithChildren } from "react";

export interface PTextProps extends PropsWithChildren, ClassNameType {
    as?: 'p' | 'span';
    maxLength?: number;
}
