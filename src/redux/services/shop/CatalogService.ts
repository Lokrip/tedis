import { ICategory } from "@/types/app/models/ICategory";
import { serviceApi } from "../service";

export const catalogParamApi = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllCategoryParam: builder.query<ICategory, undefined>({
            query: () => ({
                url: "/api/v1/categories/"
            })
        })
    })
})
