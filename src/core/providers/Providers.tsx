"use client"
import { PropsWithChildren } from "react";
import { Provider } from 'react-redux'
import { setupStore } from "../../redux/store";
import { SessionProvider } from "next-auth/react";

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
