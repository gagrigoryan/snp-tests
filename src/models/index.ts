import { connectRouter } from "connected-react-router";
import { all } from "redux-saga/effects";
import { History } from "history";

import userReducer from "./user/slice";
import userSagas from "./user/sagas";

export const createRootReducer = (history: History) => ({
    router: connectRouter(history),
    userStore: userReducer,
});

export const rootSaga = function* () {
    yield all([userSagas()]);
};
