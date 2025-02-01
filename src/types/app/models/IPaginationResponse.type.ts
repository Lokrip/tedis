import { IPagination } from "./IPagination.type";

export interface IPaginationResponse<T> extends IPagination {results: T[]}
