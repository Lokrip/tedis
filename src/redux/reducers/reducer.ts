import { combineReducers } from '@reduxjs/toolkit'

import headerReduser from './header/HeaderSlice'
import searchReduser from './header/SearchSlice'
import navigationNavbarReduser from './header/NavigationNavbarSlice'
import bannerReduser from './banner/BannerSlice'
import signInReduser from './account/signInSlice'

import { bannerApi } from '../services/banner/BannerService'

const rootReducer = combineReducers({
    headerReduser,
    bannerReduser,
    searchReduser,
    navigationNavbarReduser,
    signInReduser,
    [bannerApi.reducerPath]: bannerApi.reducer,
})

export default rootReducer;