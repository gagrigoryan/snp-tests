import { RootState } from "../../index";
import { createSelector } from "reselect";

const selectSelf = (state: RootState) => state.testsStore;

export const testsSelector = createSelector(selectSelf, ({ tests }) => tests);
