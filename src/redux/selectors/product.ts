import { IProduct } from "@/types/app/models/IProduct.type";
import { RootState } from "../store";
import { createAppSelector } from "../utils";

export const selectedProducts = createAppSelector(
    (state: RootState) => state.productReduser.ids,
    (state: RootState) => state.productReduser.entitiesProduct,
    (ids, entities) => ids.map((id) => entities[id]),
)
