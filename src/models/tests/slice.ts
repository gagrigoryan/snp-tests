import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestRequest, TTest } from "../../types/test";
import { SortQueryEnum } from "../../types/sort";
import { createQuestionSuccess, removeQuestionSuccess } from "../questions/slice";
import { QuestionCreateType, QuestionRemoveType } from "../../types/question";
import { removeQuestionFromTest } from "../../utils/removeQuestionFromTest";
import { addQuestionToTest } from "../../utils/addQuestionToTest";

interface TestsStore {
    tests: TTest[];
    fetching: boolean;
    testsFetched: boolean;
    failed?: string;
    sort: SortQueryEnum;
}

const initialState: TestsStore = {
    tests: [],
    fetching: false,
    testsFetched: false,
    sort: SortQueryEnum.CreatedAtDesc,
};

const testsSlice = createSlice({
    name: "tests",
    initialState,
    reducers: {
        getTests: (state) => {
            state.fetching = true;
            state.failed = undefined;
        },
        getTestsSuccess: (state, { payload }: PayloadAction<TTest[]>) => {
            state.fetching = false;
            state.tests = payload;
            state.testsFetched = true;
        },
        getTestsFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.failed = payload;
        },
        getCurrentTest: (state, action: PayloadAction<number>) => {
            state.fetching = true;
        },
        getCurrentTestSuccess: (state, { payload }: PayloadAction<TTest>) => {
            state.fetching = false;
            state.tests = [...state.tests, payload];
        },
        createTest: (state, action: PayloadAction<TestRequest>) => {
            state.fetching = true;
            state.failed = undefined;
        },
        createTestSuccess: (state, { payload }: PayloadAction<TTest>) => {
            state.fetching = false;
            state.tests = [...state.tests, payload];
        },
        createTestFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.failed = payload;
        },
        removeTest: (state, action: PayloadAction<number>) => {
            state.fetching = true;
        },
        removeTestSuccess: (state, { payload }: PayloadAction<number>) => {
            state.fetching = false;
            state.tests = state.tests.filter((test) => test.id !== payload);
        },
        updateTest: (state, action: PayloadAction<TTest>) => {
            state.fetching = true;
        },
        updateTestSuccess: (state, { payload }: PayloadAction<TTest>) => {
            state.fetching = false;
            state.tests = state.tests.map((test) => (test.id === payload.id ? payload : test));
        },
        changeSort: (state, { payload }: PayloadAction<SortQueryEnum>) => {
            state.sort = payload;
        },
    },
    extraReducers: {
        [createQuestionSuccess.type]: (state: TestsStore, { payload }: PayloadAction<QuestionCreateType>) => {
            state.tests = addQuestionToTest(state.tests, payload.testId, payload.question);
        },
        [removeQuestionSuccess.type]: (state: TestsStore, { payload }: PayloadAction<QuestionRemoveType>) => {
            state.tests = removeQuestionFromTest(state.tests, payload.testId, payload.id);
        },
    },
});

export const {
    getTests,
    getTestsSuccess,
    getTestsFailed,
    getCurrentTest,
    getCurrentTestSuccess,
    createTest,
    createTestSuccess,
    createTestFailed,
    removeTest,
    removeTestSuccess,
    updateTest,
    updateTestSuccess,
    changeSort,
} = testsSlice.actions;
export default testsSlice.reducer;
