"use client"
import Button from "@/components/ui/elements/button/Button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { PropsWithChildren } from "react";

export default function GoogleButton<P extends PropsWithChildren>({children}: P){
    const searchParams = useSearchParams();
    console.log(searchParams)

    const onSignIn = () => {
        signIn('google', {callbackUrl: '/profile/'})
    }

    return (
        <Button onClick={onSignIn}>{children}</Button>
    )
}