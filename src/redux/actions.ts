import { SignInSlice } from "./reducers/account/signInSlice";
import { BannerSlice } from "./reducers/banner/BannerSlice";
import { HeaderSlice } from "./reducers/header/HeaderSlice";
import { NavigationNavbarSlice } from "./reducers/header/NavigationNavbarSlice";
import { SearchSlice } from "./reducers/header/SearchSlice";

const rootActions = {
    ...HeaderSlice.actions,
    ...BannerSlice.actions,
    ...SearchSlice.actions,
    ...NavigationNavbarSlice.actions,
    ...SignInSlice.actions
}

export default rootActions;