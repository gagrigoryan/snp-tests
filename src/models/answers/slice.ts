import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnswerCreateType, AnswerRemoveType, AnswerChangePositionType, AnswerUpdateType } from "../../types/answer";

interface AnswersStore {
    fetching: boolean;
    failed?: string;
}

const initialState: AnswersStore = {
    fetching: false,
};

const answersSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        createAnswerRequest: (state, action: PayloadAction<AnswerCreateType>) => {
            state.fetching = true;
        },

        createAnswerSuccess: (state, action: PayloadAction<AnswerCreateType>) => {
            state.fetching = false;
        },
        createAnswerFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.failed = payload;
        },
        removeAnswer: (state, action: PayloadAction<AnswerRemoveType>) => {
            state.fetching = true;
        },
        removeAnswerSuccess: (state, action: PayloadAction<AnswerRemoveType>) => {
            state.fetching = false;
        },
        removeAnswerFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.failed = payload;
        },
        updateAnswer: (state, action: PayloadAction<AnswerUpdateType>) => {
            state.fetching = true;
        },
        updateAnswerSuccess: (state, action: PayloadAction<AnswerUpdateType>) => {
            state.fetching = false;
        },
        updateAnswerFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.failed = payload;
        },
        changeAnswerPosition: (state, action: PayloadAction<AnswerChangePositionType>) => {
            state.fetching = true;
        },
        changeAnswerPositionSuccess: (state, action: PayloadAction<AnswerChangePositionType>) => {
            state.fetching = false;
        },
        changeAnswerPositionFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.failed = payload;
        },
    },
});

export const {
    createAnswerRequest,
    createAnswerSuccess,
    createAnswerFailed,
    removeAnswer,
    removeAnswerSuccess,
    removeAnswerFailed,
    updateAnswer,
    updateAnswerSuccess,
    updateAnswerFailed,
    changeAnswerPosition,
    changeAnswerPositionSuccess,
    changeAnswerPositionFailed,
} = answersSlice.actions;

export default answersSlice.reducer;
