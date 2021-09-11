import { PayloadAction } from "@reduxjs/toolkit";
import { LoginRequest, RegisterRequest } from "../../types/auth";
import { takeLatest, all, put, call } from "redux-saga/effects";
import { postLogin, postRegister } from "../../api/auth";
import { TUser } from "../../types/user";
import {
    userLogin,
    userLoginFailed,
    userLoginSuccess,
    userRegister,
    userRegisterFailed,
    userRegisterSuccess,
} from "./slice";

function* userLoginSaga({ payload }: PayloadAction<LoginRequest>) {
    try {
        const user: TUser = yield call(postLogin, payload);
        yield put({
            type: userLoginSuccess.type,
            payload: user,
        });
    } catch (error) {
        yield put({
            type: userLoginFailed.type,
            // @ts-ignore
            payload: error.error,
        });
    }
}

function* userRegisterSaga({ payload }: PayloadAction<RegisterRequest>) {
    try {
        const user: TUser = yield call(postRegister, payload);
        yield put({
            type: userRegisterSuccess.type,
            payload: user,
        });
    } catch (error) {
        yield put({
            type: userRegisterFailed.type,
            // @ts-ignore
            payload: `username: ${error.username[0]}`,
        });
    }
}

const booksSagas = function* () {
    yield all([takeLatest(userLogin.type, userLoginSaga)]);
    yield all([takeLatest(userRegister.type, userRegisterSaga)]);
};

export default booksSagas;
