export interface BaseListState<ID extends number, IModel> {
    entitiesData: Record<ID, IModel | undefined>;
    ids: ID[],
}
