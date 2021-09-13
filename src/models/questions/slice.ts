import { QuestionCreateType, QuestionRemoveType, QuestionUpdateType, TQuestion } from "../../types/question";
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
        createQuestion: (state, action: PayloadAction<QuestionCreateType>) => {
            state.fetching = true;
        },
        createQuestionSuccess: (state, action: PayloadAction<QuestionCreateType>) => {
            state.fetching = false;
        },
        removeQuestion: (state, action: PayloadAction<QuestionRemoveType>) => {
            state.fetching = true;
        },
        removeQuestionSuccess: (state, action: PayloadAction<QuestionRemoveType>) => {
            state.fetching = false;
        },
        updateQuestion: (state, action: PayloadAction<QuestionUpdateType>) => {
            state.fetching = true;
        },
        updateQuestionSuccess: (state, action: PayloadAction<QuestionUpdateType>) => {
            state.fetching = false;
        },
    },
});

export const {
    removeQuestion,
    removeQuestionSuccess,
    createQuestion,
    createQuestionSuccess,
    updateQuestion,
    updateQuestionSuccess,
} = questionsSlice.actions;

export default questionsSlice.reducer;
