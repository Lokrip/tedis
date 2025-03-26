import { ProductFunApiPaginationAttributes, ProductFunApiSearchAttributes } from "@/types/app/api/product.type";
import { axios } from "@/lib/axios";
import { IProductDetails } from "@/types/app/models/IProductDetails.type";


async function getProductsData<T>(
    search: ProductFunApiSearchAttributes,
    category_slug: string = ""
): Promise<T> {
    "use server"

    try {
        let url = "/api/v1/products/"

        const params = [];

        if(category_slug)
            params.push(`category=${category_slug}`)

        if(search)
            params.push(`q=${search}`)

        if (params.length > 0)
            url += `?${params.join("&")}`;

        console.log(url)
        const data = await axios.get<T>(url);
        return data;
    } catch(error) {
        console.error(error)
        throw error
    }
}

async function getProductsPaginationData<T>({
    currentPage = null
}: ProductFunApiPaginationAttributes = {}): Promise<T> {
    "use server"
    try {
        const url = `/api/v1/products/?page=${currentPage}`;
        const data = await axios.get<T>(url);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getProductData(param: string | number) {
    "use server"
    try {
        let url = `/api/v1/products/${param}/`
        const data = await axios.get<IProductDetails>(url)
        return data;
    } catch(error) {
        console.error(error)
        throw error
    }
}

async function getSimilarPaginationProducts<T>({
    currentPage = 1
}: ProductFunApiPaginationAttributes = {}, category_slug?: string): Promise<T> {
    "use server";

    try {
        const url = `/api/v1/products/?page=${currentPage}&category=${category_slug!}`;
        const data = await axios.get<T>(url);
        return data;
    } catch(error) {
        console.error(error)
        throw error
    }
}

export {
    getProductsData,
    getProductsPaginationData,
    getProductData,
    getSimilarPaginationProducts
};
