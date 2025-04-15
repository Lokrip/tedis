import { LucideIcon } from "lucide-react"
import { InputHTMLAttributes } from "react"

interface IFieldProps {
    placeholder: string,
    error_message?: string;
    Icon?: LucideIcon,
    isStyle?: boolean,
    isError?: boolean,
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps
