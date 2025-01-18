import { IPost } from "../../types/app/models/IPost.type";
import { axios } from "../axios"

async function getProductsData(search: string | null, {
    isPagination = false,
    currentPage = null
}: {
    isPagination?: boolean;
    currentPage?: null | number
}) {
    try {
        const data = await axios.get<IPost[]>(`/api/v1/product/${search ? `?q=${search}` : ""}`)
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