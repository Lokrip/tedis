import { combineReducers } from '@reduxjs/toolkit';

import headerReduser from './header/HeaderSlice';
import searchReduser from './header/SearchSlice';
import navigationNavbarReduser from './header/NavigationNavbarSlice';
import bannerReduser from './shop/BannerSlice';
import signInReduser from './account/SignInSlice';
import signUpReduser from './account/SignUpSlice';
import productReduser from './shop/ProductSlice';
import utilsReducer from './utils/UtilsSlice';
import menuReducer from "./header/MenuSlice";
import scrollsReducer from "./utils/ScrollsSlice";
import { serviceApi } from '../services/service';


const headerInitialReducers = ({
    headerReduser,
    searchReduser,
    navigationNavbarReduser,
    menuReducer,
})

const utilsInitialReducers = ({
    utilsReducer,
    scrollsReducer
})

const shopInitialReducers = ({
    bannerReduser,
    productReduser,
})

const accountInitialReducers = ({
    signInReduser,
    signUpReduser
})

const rootReducer = combineReducers({
    ...headerInitialReducers,
    ...shopInitialReducers,
    ...accountInitialReducers,
    ...utilsInitialReducers,
    [serviceApi.reducerPath]: serviceApi.reducer
})


export default rootReducer;
