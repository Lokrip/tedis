"use client"
import Auth from "@/components/screens/auth/Auth";
import GoogleButton from "@/components/screens/auth/button/GoogleButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginPage() {
    const {push} = useRouter();

    const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const res = await signIn('credentials', {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false,
        })

        if(res && !res.error) {
            push('account/profile/')
        } else {
            console.log(res?.error)
        }
    }

    return (
        <div>
            <Auth onSubmit={handlerSubmit} type="Login" />

            <div className="social-auth">
                <GoogleButton>
                    Google
                </GoogleButton>
            </div>
        </div>
    )
}