"use client"
import { PropsWithChildren } from "react";
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react";
import { createAppStore } from "@/redux/store";
import { useRouter } from "next/navigation";


export default function Providers<
P extends PropsWithChildren>({ children }: P) {
    const router = useRouter();
    const store = createAppStore(router);

    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    );
}
