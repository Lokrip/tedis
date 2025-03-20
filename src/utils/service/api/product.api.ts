import { ProductFunApiPaginationAttributes, ProductFunApiSearchAttributes } from "@/types/app/api/product.type";
import { axios } from "@/lib/axios";
import { IProduct } from "@/types/app/models/IProduct.type";


async function getProductsData<T>(search: ProductFunApiSearchAttributes, {
    isPagination = false,
    currentPage = null
}: ProductFunApiPaginationAttributes = {}, category_slug: string = ""): Promise<T> {
    "use server"

    try {
        let url = "/api/v1/products/"

        const params = [];

        if(category_slug)
            params.push(`category=${category_slug}`)

        if(search)
            params.push(`q=${search}`)

        if (isPagination && currentPage)
            params.push(`page=${currentPage}`);

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

async function getProductData(param: string | number) {
    try {
        const data = await axios.get<IProduct>(`/api/v1/products/${param}/`)
        return data;
    } catch(error) {
        console.error(error)
        throw error
    }
}

export {getProductsData, getProductData};
