import { RootState } from "../../index";
import { createSelector } from "reselect";

const selectSelf = (state: RootState) => state.alertStore;

export const alertSelector = createSelector(selectSelf, ({ alert }) => alert);
