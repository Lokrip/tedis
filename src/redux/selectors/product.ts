import { RootState } from "../store";
import { createAppSelector } from "../utils";

export const selectedProducts = createAppSelector(
    (state: RootState) => state.productReduser.ids,
    (state: RootState) => state.productReduser.entitiesData,
    (ids, entities) => ids.map((id) => entities[id]),
)
