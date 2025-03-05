import { LucideIcon } from "lucide-react"
import { InputHTMLAttributes } from "react"

interface IFieldProps {
    placeholder: string,
    Icon?: LucideIcon,
    isStyle?: boolean,
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps
