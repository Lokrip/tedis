import { ButtonHTMLAttributes } from "react";

export interface ButtonTypeInterface extends ButtonHTMLAttributes<
HTMLButtonElement
> {
    children?: React.ReactNode;
}