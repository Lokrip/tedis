import { ISearchParam } from "@/types/app/models/ISearchParam.type";
import { serviceApi } from "../service";

export const searchParamApi = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllSearchParam: builder.query<ISearchParam, string>({
            query: (param) => ({
                url: ""
            })
        })
    })
})