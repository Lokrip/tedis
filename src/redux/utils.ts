import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./redux";

export const createAppSelector = createSelector.withTypes<RootState>()
