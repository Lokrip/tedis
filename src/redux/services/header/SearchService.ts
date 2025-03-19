import { ISearchParam } from "@/types/app/models/ISearchParam.type";
import { serviceApi } from "../service";

export const searchParamApi = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllSearchParam: builder.query<ISearchParam[], string>({
            query: (param) => ({
                url: "/api/v1/search/suggestions/",
                params: {query: param}
            })
        }),
        createSearchParam: builder.mutation<string, {query: string}>({
            query: (query) => ({
                url: "/api/v1/search/add-popular-search/",
                method: "POST",
                body: query
            })
        })
    })
})
