import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers/reducer'
import { serviceApi } from './services/service'


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(serviceApi.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
