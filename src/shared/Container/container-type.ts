import { ClassNameType } from "@/types/react.type";
import { PropsWithChildren } from "react";

export interface ContainerProps extends PropsWithChildren, ClassNameType {
    maxWidth?: string|number;
}
