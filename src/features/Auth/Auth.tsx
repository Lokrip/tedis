"use client"
import { AuthenticatedFields, IAuth } from "@/types/app/auth.types";
import styles from "./auth.module.scss"
import { ClassNameType } from "@/types/react.type";
import { correctClass } from "@/utils/utils";
import LoginAuth from "./LoginAuth";
import RegisterAuth from "./RegisterAuth";

export default function Auth<P extends IAuth & ClassNameType>({ type, className }: P) {
    const defaultValues: AuthenticatedFields & {
        [key: string]: string
    } = {
        email: '',
        password: '',
    }
    const classNameValid = correctClass(styles.authForm, className ?? "");
    if(type === "Login") {
        return (<LoginAuth
            defaultValues={defaultValues}
            className={classNameValid}
        />)
    } else {
        const newDefaultValues = {
            ...defaultValues,
            first_name: "",
            last_name: "",
            username: "",
        }
        return (<RegisterAuth
            defaultValues={newDefaultValues}
            className={classNameValid}
        />)
    }
}
