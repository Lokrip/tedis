import { ICategory } from "./ICategory"
import { IPaginationProduct } from "./IProduct.type"

export interface IProductDetails {
  id: number
  price_discount: number
  category: ICategory
  created_at: string
  updated_at: string
  title: string
  metaTitle: string
  slug: string
  summary: string
  accessibility: string
  condition: string
  warehouse: string
  promotional: string
  checks: string
  price: string
  discount: number
  user: number
}
