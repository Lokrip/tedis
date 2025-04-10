interface PaginationState<ID, IModel> {
    entitiesData: Record<ID, IModel>;
    ids: ID[],
    currentPage: number,
    selectedDataId: ID | null;
    isError: boolean;
    error: string | null;
    isFetching: boolean;
}
