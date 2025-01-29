import { IProduct } from "@/types/app/models/IProduct.type";
import { ProductError } from "@/types/enum.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//использование такой структуры состояние имеет несолько причин
//оптимизация доступа к данным Когда в проекте используется Redux для управления состоянием, структура данных entitiesProduct: Record<ProductId, IProduct> позволяет эффективно получать доступ к отдельным продуктам по их идентификаторам. Это снижает время поиска, поскольку доступ к объектам в JavaScript через ключи выполняется быстрее, чем поиск в массиве
//yправление зависимостями и действиями В больших приложениях часто требуется синхронизировать данные в разных частях приложения. Например, когда вы добавляете продукт в корзину, вам нужно обновить как сущности продукта, так и список идентификаторов продуктов, чтобы знать, какие продукты находятся в корзине. Это упрощает дальнейшую обработку и обновление данных, поскольку вы централизуете все изменения состояния.
//масштабируемость и поддержка Когда проект растет, и количество данных увеличивается, важно иметь структуру, которая позволяет легко масштабировать логику работы с состоянием. Нормализованная структура в Redux позволяет добавлять новые виды данных, новые сущности и так далее без переписывания всего состояния.
//управления зависимостями синхронизация данных между компонентами и состоянием.
const initialState: ProductState = {
    entitiesProduct: {},
    ids: [],
    selectedProductId: null,
    isError: false,
    error: null,
}

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductList(state, action: PayloadAction<{products: IProduct[]}>) {
            const {products} = action.payload;

            if(!products || products.length === 0) {
                state.entitiesProduct = {}
                state.ids = []
                state.isError = true
                state.error = ProductError.ProductNotFound
                return;
            }


            state.entitiesProduct = products.reduce((acc, product) => {
                acc[product.id] = product
                return acc
            }, {} as Record<ProductId, IProduct>);
            state.ids = products.map<ProductId>((product) => product.id)
        }
    }
})


export default ProductSlice.reducer;
