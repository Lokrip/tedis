import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'

import rootReducer from './reducers/reducer'
import { createAppStore } from './store'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createAppStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<R = void> = ThunkAction<
    R,
    RootState,
    { router: AppRouterInstance },
    UnknownAction
>
