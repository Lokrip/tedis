import { BannerSlice } from "./reducers/banner/BannerSlice";
import { HeaderSlice } from "./reducers/header/HeaderSlice";

const rootActions = {
    ...HeaderSlice.actions,
    ...BannerSlice.actions
}


export default rootActions;