import { TAnswer } from "../types/answer";

export const prepareAnswerDataOnChange = (
    answers: TAnswer[],
    changedAnswer: TAnswer,
    isMultiple: boolean
): TAnswer[] => {
    return answers.map((answer) => {
        if (answer.id === changedAnswer.id) return changedAnswer;
        return !isMultiple ? { ...answer, is_right: false } : answer;
    });
};
