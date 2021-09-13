import { QuestionRemoveType, TQuestion } from "../../types/question";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionsStore {
    questions: TQuestion[];
    fetching: boolean;
    failed?: string;
}

const initialState: QuestionsStore = {
    questions: [],
    fetching: false,
};

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        removeQuestion: (state, action: PayloadAction<QuestionRemoveType>) => {
            state.fetching = true;
        },
        removeQuestionSuccess: (state, action: PayloadAction<QuestionRemoveType>) => {
            state.fetching = false;
        },
    },
});

export const { removeQuestion, removeQuestionSuccess } = questionsSlice.actions;

export default questionsSlice.reducer;
