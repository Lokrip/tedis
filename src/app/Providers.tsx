"use client"
import { PropsWithChildren } from "react";
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react";
import { setupStore } from "@/redux/store";

const store = setupStore();

export default function Providers<
P extends PropsWithChildren>({ children }: P) {
    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    );
}
