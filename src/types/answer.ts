export type TAnswer = {
    id: number;
    text: string;
    is_right: boolean;
    isCreated?: boolean;
};

export type AnswerCreateType = {
    testId: number;
    questionId: number;
    answer: TAnswer;
};

export type AnswerRemoveType = {
    testId: number;
    id: number;
    questionId: number;
};

export type AnswerUpdateType = AnswerCreateType;

export type PassingTestAnswersType = {
    [key in number]: string[] | string;
};

export type AnswerChangePositionType = {
    id: number;
    startPosition: number;
    endPosition: number;
    testId: number;
    questionId: number;
};
