import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannerApi = createApi({
    reducerPath: 'bannerApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (build) => ({
        fetchAllImages: build.query<any, number>({
            query: (limit) => ({
                url: "/photos",
                params: {
                    _limit: limit
                }
            })
        })
    })
})