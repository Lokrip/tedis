import { SignInSlice } from "./reducers/account/signInSlice";
import { BannerSlice } from "./reducers/shop/BannerSlice";
import { HeaderSlice } from "./reducers/header/HeaderSlice";
import { NavigationNavbarSlice } from "./reducers/header/NavigationNavbarSlice";
import { SearchSlice } from "./reducers/header/SearchSlice";
import { ProductSlice } from "./reducers/shop/ProductSlice";

const headerAction = {
    ...HeaderSlice.actions,
    ...SearchSlice.actions,
    ...NavigationNavbarSlice.actions,
}
const shopAction = {
    ...BannerSlice.actions,
    ...ProductSlice.actions
}
const accountAction = {...SignInSlice.actions,}

const rootActions = {
    ...headerAction,
    ...accountAction,
    ...shopAction
}

export default rootActions;
