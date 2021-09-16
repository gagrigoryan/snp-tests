import { RootState } from "../../index";
import { createSelector } from "reselect";

const selectSelf = (state: RootState) => state.testsStore;

export const testsSelector = createSelector(selectSelf, ({ tests }) => tests);

export const testsSortSelector = createSelector(selectSelf, ({ sort }) => sort);

export const testsFetchedSelector = createSelector(selectSelf, ({ testsFetched }) => testsFetched);

export const testsMetaSelector = createSelector(selectSelf, ({ meta }) => meta);

export const testsPageSelector = createSelector(selectSelf, ({ page }) => page);
