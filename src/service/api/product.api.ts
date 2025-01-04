import { IPost } from "@/types/app/models/IPost.type";
import { axios } from "../axios"

async function getProductsData() {
    try {
        const data = await axios.get<IPost[]>("/api/v1/product/")
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