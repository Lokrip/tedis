import {IBanner} from "../../../types/app/models/IBanner.type";
import { serviceApi } from "../service";

export const bannerApi = serviceApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllImages: build.query<IBanner, number>({
            query: (limit) => ({
                url: "/photos",
                params: {
                    _limit: limit
                }
            })
        })
    })
})
