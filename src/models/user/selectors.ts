import { createSelector } from "reselect";
import { RootState } from "../../index";

const selectSelf = (state: RootState) => state.userStore;

export const loginFailedSelector = createSelector(selectSelf, ({ loginFailed }) => loginFailed);

export const registerFailedSelector = createSelector(selectSelf, ({ registerFailed }) => registerFailed);
