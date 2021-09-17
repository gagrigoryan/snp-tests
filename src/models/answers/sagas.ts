import { all, call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
    AnswerCreateType,
    AnswerRemoveType,
    AnswerChangePositionType,
    AnswerUpdateType,
    TAnswer,
} from "../../types/answer";
import { changeAnswer, deleteAnswer, insertAnswer, postAnswer } from "../../api/answer";
import {
    changeAnswerPosition,
    changeAnswerPositionSuccess,
    createAnswer,
    createAnswerSuccess,
    removeAnswer,
    removeAnswerSuccess,
    updateAnswer,
    updateAnswerSuccess,
} from "./slice";

function* createAnswerSaga({ payload }: PayloadAction<AnswerCreateType>) {
    try {
        const answer: TAnswer = yield call(postAnswer, payload.questionId, payload.answer);
        yield put({
            type: createAnswerSuccess.type,
            payload: {
                ...payload,
                answer,
            },
        });
    } catch (error) {
        console.error(error);
    }
}

function* updateAnswerSaga({ payload }: PayloadAction<AnswerUpdateType>) {
    try {
        const answer: TAnswer = yield call(changeAnswer, payload.answer.id, payload.answer);
        yield put({
            type: updateAnswerSuccess.type,
            payload: {
                ...payload,
                answer,
            },
        });
    } catch (error) {
        console.error(error);
    }
}

function* removeAnswerSaga({ payload }: PayloadAction<AnswerRemoveType>) {
    try {
        yield call(deleteAnswer, payload.id);
        yield put({
            type: removeAnswerSuccess.type,
            payload,
        });
    } catch (error) {
        console.error(error);
    }
}

function* changeAnswerPositionSaga({ payload }: PayloadAction<AnswerChangePositionType>) {
    try {
        yield call(insertAnswer, payload.id, payload.endPosition);
        yield put({
            type: changeAnswerPositionSuccess.type,
            payload,
        });
    } catch (error) {
        console.error(error);
    }
}

const answersSagas = function* () {
    yield all([takeEvery(createAnswer.type, createAnswerSaga)]);
    yield all([takeEvery(updateAnswer.type, updateAnswerSaga)]);
    yield all([takeEvery(removeAnswer.type, removeAnswerSaga)]);
    yield all([takeEvery(changeAnswerPosition.type, changeAnswerPositionSaga)]);
};

export default answersSagas;
