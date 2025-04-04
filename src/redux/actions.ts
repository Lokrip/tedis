import { SignInSlice } from "./reducers/account/signInSlice";
import { BannerSlice } from "./reducers/shop/BannerSlice";
import { HeaderSlice } from "./reducers/header/HeaderSlice";
import { NavigationNavbarSlice } from "./reducers/header/NavigationNavbarSlice";
import { SearchSlice } from "./reducers/header/SearchSlice";
import { ProductSlice } from "./reducers/shop/ProductSlice";
import { UtilsSlice } from "./reducers/utils/UtilsSlice";
import { MenuSlice } from "./reducers/header/MenuSlice";
import { ScrollsSlice } from "./reducers/utils/ScrollsSlice";

const headerAction = {
    ...HeaderSlice.actions,
    ...SearchSlice.actions,
    ...NavigationNavbarSlice.actions,
    ...MenuSlice.actions
}
const utilsAction = {
    ...UtilsSlice.actions,
    ...ScrollsSlice.actions
}
const shopAction = {
    ...BannerSlice.actions,
    ...ProductSlice.actions
}
const accountAction = {
    ...SignInSlice.actions,
}

const rootActions = {
    ...headerAction,
    ...accountAction,
    ...shopAction,
    ...utilsAction
}

export default rootActions;
