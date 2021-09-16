import { TestRequest, TTest } from "../../types/test";
import { changeTest, deleteTest, fetchCurrentTest, fetchTests, postTest } from "../../api/test";
import { takeLatest, all, put, call, select } from "redux-saga/effects";
import {
    changeSort,
    createTest,
    createTestSuccess,
    getCurrentTest,
    getCurrentTestSuccess,
    getTests,
    getTestsSuccess,
    removeTest,
    setPage,
    setSearch,
    updateTest,
    updateTestSuccess,
} from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { SortQueryEnum } from "../../types/sort";
import { push } from "connected-react-router";
import { testsPageSelector, testsSearchSelector, testsSortSelector } from "./selectors";

function* getTestsSaga() {
    try {
        const sort: SortQueryEnum = yield select(testsSortSelector);
        const page: number = yield select(testsPageSelector);
        const search: string = yield select(testsSearchSelector);
        // @ts-ignore
        const response: any = yield call(fetchTests, { sort, page, search });
        yield put({
            type: getTestsSuccess.type,
            payload: response,
        });
    } catch (error) {
        console.error(error);
    }
}

function* getCurrentTestSaga({ payload }: PayloadAction<number>) {
    try {
        const test: TTest = yield call(fetchCurrentTest, payload);
        yield put({
            type: getCurrentTestSuccess.type,
            payload: test,
        });
    } catch (error) {
        console.error(error);
    }
}

function* createTestSaga({ payload }: PayloadAction<TestRequest>) {
    try {
        const test: TTest = yield call(postTest, payload);
        yield put({
            type: createTestSuccess.type,
            payload: test,
        });
    } catch (error) {
        console.error(error);
    }
}

function* removeTestSaga({ payload }: PayloadAction<number>) {
    try {
        yield call(deleteTest, payload);
        // yield put({
        //     type: removeTestSuccess.type,
        //     payload,
        // });
        const page: number = yield select(testsPageSelector);
        const sort: SortQueryEnum = yield select(testsSortSelector);
        const search: string = yield select(testsSearchSelector);

        // @ts-ignore
        yield call(getTestsSaga, { payload: { sort, page, search } });
    } catch (error) {
        console.error(error);
    }
}

function* updateTestSaga({ payload }: PayloadAction<TTest>) {
    try {
        const test: TTest = yield call(changeTest, payload);
        yield put({
            type: updateTestSuccess.type,
            payload: test,
        });
        yield put(push("/"));
    } catch (error) {
        console.error(error);
    }
}

const testsSagas = function* () {
    yield all([takeLatest(getTests.type, getTestsSaga)]);
    yield all([takeLatest(getCurrentTest.type, getCurrentTestSaga)]);
    yield all([takeLatest(changeSort.type, getTestsSaga)]);
    yield all([takeLatest(setPage.type, getTestsSaga)]);
    yield all([takeLatest(setSearch.type, getTestsSaga)]);
    yield all([takeLatest(createTest.type, createTestSaga)]);
    yield all([takeLatest(removeTest.type, removeTestSaga)]);
    yield all([takeLatest(updateTest.type, updateTestSaga)]);
};

export default testsSagas;
