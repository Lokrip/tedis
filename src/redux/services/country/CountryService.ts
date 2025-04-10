import { ICountry } from "@/types/app/models/ICountry.type";
import { serviceApi } from "../service";

export const countryApi = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllCountry: builder.query<ICountry[], void>({
            query: () => ({
                url: "/api/v1/country/"
            })
        })
    })
})
