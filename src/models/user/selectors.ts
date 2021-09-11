import { createSelector } from "reselect";
import { RootState } from "../../index";

const selectSelf = (state: RootState) => state.userStore;

export const userSelector = createSelector(selectSelf, ({ user }) => user);

export const isAdminSelector = createSelector(selectSelf, ({ user }) => user.is_admin);

export const isAuthenticatedSelector = createSelector(selectSelf, ({ isAuthenticated }) => isAuthenticated);

export const loginFailedSelector = createSelector(selectSelf, ({ loginFailed }) => loginFailed);

export const registerFailedSelector = createSelector(selectSelf, ({ registerFailed }) => registerFailed);
