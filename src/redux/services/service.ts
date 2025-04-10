import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.PRODUCT_API_URL

export const serviceApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: ['SearchQuery'],
    endpoints: () => ({})
})
