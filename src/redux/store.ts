import { combineReducers, configureStore } from '@reduxjs/toolkit'
import headerReduser from './reducers/header/HeaderSlice'
import bannerReduser from './reducers/banner/BannerSlice'
import { bannerApi } from './services/BannerService'


const rootReducer = combineReducers({
    headerReduser,
    bannerReduser,
    [bannerApi.reducerPath]: bannerApi.reducer,
})

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