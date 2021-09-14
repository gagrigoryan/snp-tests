import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnswerCreateType, AnswerRemoveType, AnswerUpdateType } from "../../types/answer";

interface AnswersStore {
    fetching: boolean;
    failed: boolean;
}

const initialState: AnswersStore = {
    fetching: false,
    failed: false,
};

const answersSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        createAnswer: (state, action: PayloadAction<AnswerCreateType>) => {
            state.fetching = true;
        },

        createAnswerSuccess: (state, action: PayloadAction<AnswerCreateType>) => {
            state.fetching = false;
        },
        removeAnswer: (state, action: PayloadAction<AnswerRemoveType>) => {
            state.fetching = true;
        },

        removeAnswerSuccess: (state, action: PayloadAction<AnswerRemoveType>) => {
            state.fetching = false;
        },
        updateAnswer: (state, action: PayloadAction<AnswerUpdateType>) => {
            state.fetching = true;
        },

        updateAnswerSuccess: (state, action: PayloadAction<AnswerUpdateType>) => {
            state.fetching = false;
        },
    },
});

export const {
    createAnswer,
    createAnswerSuccess,
    removeAnswer,
    removeAnswerSuccess,
    updateAnswer,
    updateAnswerSuccess,
} = answersSlice.actions;

export default answersSlice.reducer;
