import { all, call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { deleteQuestion } from "../../api/question";
import { removeQuestion, removeQuestionSuccess } from "./slice";
import { QuestionRemoveType } from "../../types/question";

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
    yield all([takeLatest(removeQuestion.type, removeQuestionsSaga)]);
};

export default questionsSagas;
