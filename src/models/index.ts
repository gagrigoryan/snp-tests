import { connectRouter } from "connected-react-router";
import { all } from "redux-saga/effects";
import { History } from "history";

import userReducer from "./user/slice";
import testsReducer from "./tests/slice";
import questionsReducer from "./questions/slice";
import answersReducer from "./answers/slice";
import alertReducer from "./alert/slice";
import userSagas from "./user/sagas";
import testsSagas from "./tests/sagas";
import questionsSaga from "./questions/sagas";
import answersSaga from "./answers/sagas";

export const createRootReducer = (history: History) => ({
    router: connectRouter(history),
    userStore: userReducer,
    testsStore: testsReducer,
    questionsStore: questionsReducer,
    answersStore: answersReducer,
    alertStore: alertReducer,
});

export const rootSaga = function* () {
    yield all([userSagas(), testsSagas(), questionsSaga(), answersSaga()]);
};
