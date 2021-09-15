import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestRequest, TTest } from "../../types/test";
import { SortQueryEnum } from "../../types/sort";
import { createQuestionSuccess, removeQuestionSuccess, updateQuestionSuccess } from "../questions/slice";
import { QuestionCreateType, QuestionRemoveType, QuestionUpdateType } from "../../types/question";
import { addTestQuestion, removeTestQuestion, updateTestQuestion } from "../../utils/testQuestion";
import { createAnswerSuccess, removeAnswerSuccess, updateAnswerSuccess } from "../answers/slice";
import { AnswerCreateType, AnswerRemoveType, AnswerUpdateType } from "../../types/answer";
import { addTestAnswer, removeTestAnswer, updateTestAnswer } from "../../utils/testAnswer";

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
            state.tests = addTestQuestion(state.tests, payload.testId, payload.question);
        },
        [removeQuestionSuccess.type]: (state: TestsStore, { payload }: PayloadAction<QuestionRemoveType>) => {
            state.tests = removeTestQuestion(state.tests, payload.testId, payload.id);
        },
        [updateQuestionSuccess.type]: (state: TestsStore, { payload }: PayloadAction<QuestionUpdateType>) => {
            state.tests = updateTestQuestion(state.tests, payload.testId, payload.question);
        },
        [createAnswerSuccess.type]: (state: TestsStore, { payload }: PayloadAction<AnswerCreateType>) => {
            state.tests = addTestAnswer(state.tests, payload.testId, payload.questionId, payload.answer);
        },
        [removeAnswerSuccess.type]: (state: TestsStore, { payload }: PayloadAction<AnswerRemoveType>) => {
            state.tests = removeTestAnswer(state.tests, payload.testId, payload.questionId, payload.id);
        },
        [updateAnswerSuccess.type]: (state: TestsStore, { payload }: PayloadAction<AnswerUpdateType>) => {
            state.tests = updateTestAnswer(state.tests, payload.testId, payload.questionId, payload.answer);
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
