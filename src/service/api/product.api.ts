import { IPost } from "../../types/app/models/IPost.type";
import { axios } from "../axios"

async function getProductsData<T>(search: string | null, {
    isPagination = false,
    currentPage = null
}: {
    isPagination?: boolean;
    currentPage?: null | number
} = {}): Promise<T> {
    try {
        let url = "/api/v1/product/"

        const params = [];

        if(search)
            params.push(`q=${search}`)

        if (isPagination && currentPage)
            params.push(`page=${currentPage}`);

        if (params.length > 0)
            url += `?${params.join("&")}`;
        
        const data = await axios.get<T>(url);
        return data;
    } catch(error) {
        console.error(error)
        throw error
    }
}

async function getProductData(param: string | number) {
    try {
        const data = await axios.get<IPost>(`/api/v1/product/${param}/`)
        return data;
    } catch(error) {
        console.error(error)
        throw error
    }
}

export {getProductsData, getProductData};
