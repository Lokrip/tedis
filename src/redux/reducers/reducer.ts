import { combineReducers } from '@reduxjs/toolkit';

import headerReduser from './header/HeaderSlice';
import searchReduser from './header/SearchSlice';
import navigationNavbarReduser from './header/NavigationNavbarSlice';
import bannerReduser from './shop/BannerSlice';
import signInReduser from './account/signInSlice';
import productReduser from './shop/ProductSlice';
import utilsReducer from './utils/UtilsSlice';
import menuReducer from "./header/MenuSlice";
import scrollsReducer from "./utils/ScrollsSlice";

import { bannerApi } from '../services/banner/BannerService'
import { searchParamApi } from '../services/header/SearchService';


const headerInitialReducers = ({
    headerReduser,
    searchReduser,
    navigationNavbarReduser,
    menuReducer,
    [searchParamApi.reducerPath]: searchParamApi.reducer
})

const utilsInitialReducers = ({
    utilsReducer,
    scrollsReducer
})

const shopInitialReducers = ({
    bannerReduser,
    productReduser,
    [bannerApi.reducerPath]: bannerApi.reducer,
})

const accountInitialReducers = ({
    signInReduser
})

const rootReducer = combineReducers({
    ...headerInitialReducers,
    ...shopInitialReducers,
    ...accountInitialReducers,
    ...utilsInitialReducers
})


export default rootReducer;
