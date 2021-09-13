import { all, call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { changeQuestion, deleteQuestion, postQuestion } from "../../api/question";
import {
    createQuestion,
    createQuestionSuccess,
    removeQuestion,
    removeQuestionSuccess,
    updateQuestion,
    updateQuestionSuccess,
} from "./slice";
import { QuestionCreateType, QuestionRemoveType, QuestionUpdateType, TQuestion } from "../../types/question";

function* createQuestionSaga({ payload }: PayloadAction<QuestionCreateType>) {
    try {
        const question: TQuestion = yield call(postQuestion, payload.testId, payload.question);
        yield put({
            type: createQuestionSuccess.type,
            payload: {
                testId: payload.testId,
                question,
            },
        });
    } catch (error) {
        console.error(error);
    }
}

function* removeQuestionSaga({ payload }: PayloadAction<QuestionRemoveType>) {
    try {
        yield call(deleteQuestion, payload.id);
        yield put({
            type: removeQuestionSuccess.type,
            payload,
        });
    } catch (error) {
        console.error(error);
    }
}

function* updateQuestionSaga({ payload }: PayloadAction<QuestionUpdateType>) {
    try {
        const question: TQuestion = yield call(changeQuestion, payload.question.id, payload.question);
        yield put({
            type: updateQuestionSuccess.type,
            payload: {
                testId: payload.testId,
                question,
            },
        });
    } catch (error) {
        console.error(error);
    }
}

const questionsSagas = function* () {
    yield all([takeLatest(createQuestion.type, createQuestionSaga)]);
    yield all([takeLatest(removeQuestion.type, removeQuestionSaga)]);
    yield all([takeLatest(updateQuestion.type, updateQuestionSaga)]);
};

export default questionsSagas;
