import { IModelPrimary } from "./IModelPrimary.type";
import { IPagination } from "./IPagination.type";
import { IPaginationResponse } from "./IPaginationResponse.type";

export interface IProduct extends IModelPrimary {
    title: string; // Название продукта
    description: string; // Описание продукта
    price: string; // Цена продукта в строковом формате
    discount: number; // Скидка в процентах
    price_with_discount: number; // Цена с учётом скидки
    image: string; // URL изображения
    slug: string; // Уникальный идентификатор продукта
    status: string; // Статус продукта (например, "reserved")
    stock: number; // Количество на складе
    summary: number; // Сумма (если используется для подсчётов)
    brand: string; // Название бренда
    supplier: number; // ID поставщика
    color: number[]; // Массив ID цветов
    tag: number[]; // Массив ID тегов
    category: number; // ID категории
    created_at: string; // Дата создания в формате ISO
    update_at: string; // Дата обновления в формате ISO
    product_images: string[]; // Массив изображений продукта
}


export interface IPaginationProduct extends IPaginationResponse<IProduct> {}
