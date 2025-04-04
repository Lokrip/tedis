"use client"
import Button from "@/widgets/ui/elements/button/Button";
import { PropsWithChildren } from "react";

export default function GoogleButton<P extends PropsWithChildren>({children}: P){

    const onSignIn = () => {

    }

    return (
        <Button onClick={onSignIn}>{children}</Button>
    )
}
