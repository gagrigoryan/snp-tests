import { all, call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { deleteQuestion, postQuestion } from "../../api/question";
import { createQuestion, createQuestionSuccess, removeQuestion, removeQuestionSuccess } from "./slice";
import { QuestionCreateType, QuestionRemoveType, TQuestion } from "../../types/question";

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

function* removeQuestionsSaga({ payload }: PayloadAction<QuestionRemoveType>) {
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

const questionsSagas = function* () {
    yield all([takeLatest(createQuestion.type, createQuestionSaga)]);
    yield all([takeLatest(removeQuestion.type, removeQuestionsSaga)]);
};

export default questionsSagas;
