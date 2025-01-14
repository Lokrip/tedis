import IBanner from "../../types/app/models/IBanner.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.JSONPLACEHOLDER_API_URL

export const bannerApi = createApi({
    reducerPath: 'bannerApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}), 
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