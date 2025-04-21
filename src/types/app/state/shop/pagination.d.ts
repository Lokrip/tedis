interface PaginationState<ID, IModel> {
    entitiesData: Record<ID, IModel | undefined>;
    ids: ID[],
    currentPage: number,
    selectedDataId: ID | null;
    isError: boolean;
    error: string | null;
    isFetching: boolean;
}
