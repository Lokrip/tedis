import { configureStore } from '@reduxjs/toolkit'

import { bannerApi } from './services/BannerService'
import rootReducer from './reducers/reducer'


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(bannerApi.middleware)
        
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']