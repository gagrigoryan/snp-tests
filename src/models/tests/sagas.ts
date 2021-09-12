import { TestRequest, TTest } from "../../types/test";
import { fetchTests, postTest } from "../../api/test";
import { takeLatest, all, put, call } from "redux-saga/effects";
import { createTest, createTestSuccess, getTests, getTestsSuccess } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";

function* getTestsSaga() {
    try {
        // @ts-ignore
        const response: any = yield call(fetchTests);
        yield put({
            type: getTestsSuccess.type,
            payload: response.tests,
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

const testsSagas = function* () {
    yield all([takeLatest(getTests.type, getTestsSaga)]);
    yield all([takeLatest(createTest.type, createTestSaga)]);
};

export default testsSagas;