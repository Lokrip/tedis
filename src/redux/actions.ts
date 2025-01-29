import { SignInSlice } from "./reducers/account/signInSlice";
import { BannerSlice } from "./reducers/shop/BannerSlice";
import { HeaderSlice } from "./reducers/header/HeaderSlice";
import { NavigationNavbarSlice } from "./reducers/header/NavigationNavbarSlice";
import { SearchSlice } from "./reducers/header/SearchSlice";
import { ProductSlice } from "./reducers/shop/ProductSlice";

const rootActions = {
    ...HeaderSlice.actions,
    ...BannerSlice.actions,
    ...SearchSlice.actions,
    ...NavigationNavbarSlice.actions,
    ...SignInSlice.actions,
    ...ProductSlice.actions
}

export default rootActions;
