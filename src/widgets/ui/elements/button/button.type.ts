import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

export interface ButtonTypeInterface extends ButtonHTMLAttributes<
HTMLButtonElement
> {
    children?: React.ReactNode;
}



export type ButtonType = 'primary' | 'secondary' | 'btnV4'

export interface ButtonSetProps extends ButtonTypeInterface {
    buttonType: ButtonType
}

export interface ButtonElementsType {
    primary: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>;
    secondary: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>;
    btnV4: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>;
}
