import { IModelPrimary } from "./IModelPrimary.type";
import { IPagination } from "./IPagination.type";
import { IPaginationResponse } from "./IPaginationResponse.type";

export interface IProduct extends IModelPrimary {
    id: number;
    price_discount: number;
    created_at: string;  // Можно использовать Date, если парсить строку
    updated_at: string;  // Можно использовать Date, если парсить строку
    title: string;
    metaTitle: string;
    slug: string;
    summary: string;
    accessibility: string;
    condition: string;
    warehouse: string;
    promotional: string;
    checks: string;
    price: string;  // Можно заменить на number, если конвертировать
    discount: number;
    user: number;
    category: number;
}


export interface IPaginationProduct extends IPaginationResponse<IProduct> {}
