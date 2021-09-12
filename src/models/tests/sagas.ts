import { TestRequest, TTest } from "../../types/test";
import { changeTest, deleteTest, fetchCurrentTest, fetchTests, postTest } from "../../api/test";
import { takeLatest, all, put, call } from "redux-saga/effects";
import {
    changeSort,
    createTest,
    createTestSuccess,
    getCurrentTest,
    getCurrentTestSuccess,
    getTests,
    getTestsSuccess,
    removeTest,
    removeTestSuccess,
    updateTest,
    updateTestSuccess,
} from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { SortQueryEnum } from "../../types/sort";

function* getTestsSaga({ payload = SortQueryEnum.CreatedAtDesc }: PayloadAction<SortQueryEnum>) {
    try {
        // @ts-ignore
        const response: any = yield call(fetchTests, {
            sort: payload,
        });
        yield put({
            type: getTestsSuccess.type,
            payload: response.tests,
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
        yield put({
            type: removeTestSuccess.type,
            payload,
        });
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
    } catch (error) {
        console.error(error);
    }
}

const testsSagas = function* () {
    yield all([takeLatest(getTests.type, getTestsSaga)]);
    yield all([takeLatest(getCurrentTest.type, getCurrentTestSaga)]);
    yield all([takeLatest(changeSort.type, getTestsSaga)]);
    yield all([takeLatest(createTest.type, createTestSaga)]);
    yield all([takeLatest(removeTest.type, removeTestSaga)]);
    yield all([takeLatest(updateTest.type, updateTestSaga)]);
};

export default testsSagas;
