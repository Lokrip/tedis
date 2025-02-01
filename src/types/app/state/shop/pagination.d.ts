import { IProduct } from "../../models/IProduct.type";

type ProductId = number
interface ProductState extends PaginationState<ProductId, IProduct> {}
