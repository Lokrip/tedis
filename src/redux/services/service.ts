import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.PRODUCT_API_URL

export const serviceApi = createApi({
    reducerPath: 'bannerApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: _ => ({})
})
