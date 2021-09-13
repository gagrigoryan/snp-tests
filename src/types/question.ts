export enum QuestionTypesEnum {
    Single = "single",
    Multiple = "multiple",
    Number = "number",
}

export type TQuestion = {
    id: number;
    title: string;
    question_type: QuestionTypesEnum;
    answer?: number;
    answers?: number[];
};

export type QuestionRemoveType = {
    id: number;
    testId: number;
};
