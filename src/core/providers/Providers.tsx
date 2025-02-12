"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Provider } from 'react-redux'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { setupStore } from "../../redux/store";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();
const store = setupStore();

export default function Providers<
P extends PropsWithChildren>({ children }: P) {
    return (
        <SessionProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </Provider>
        </SessionProvider>
    );
}
