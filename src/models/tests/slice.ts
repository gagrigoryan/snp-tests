import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestRequest, TTest } from "../../types/test";

interface TestsStore {
    tests: TTest[];
    fetching: boolean;
    failed?: string;
}

const initialState: TestsStore = {
    tests: [],
    fetching: false,
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
        },
        getTestsFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.failed = payload;
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
    },
});

export const {
    getTests,
    getTestsSuccess,
    getTestsFailed,
    createTest,
    createTestSuccess,
    createTestFailed,
    removeTest,
    removeTestSuccess,
} = testsSlice.actions;
export default testsSlice.reducer;
