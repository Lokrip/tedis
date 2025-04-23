import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducer";
import { serviceApi } from "./services/service";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const createAppStore = (router: AppRouterInstance) => {
    const extraArgument = {router}

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({thunk: {extraArgument}})
                .concat(serviceApi.middleware)

    })

    return store;
}
