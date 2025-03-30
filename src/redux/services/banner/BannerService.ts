import {IBanner} from "../../../types/app/models/IBanner.type";
import { serviceApi } from "../service";

export const bannerApi = serviceApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllImages: build.query<IBanner, number>({
            query: (limit) => ({
                url: "/api/v1/banners/",
                params: {
                    _limit: limit
                }
            })
        })
    })
})
