import { TQuestion } from "../types/question";
import { PassingTestAnswersType } from "../types/answer";
import { checkIsEqualArrays } from "./checkIsEqualArrays";

export const getResultOfPassingTest = (questions: TQuestion[], answers: PassingTestAnswersType): number => {
    let result = 0;
    questions.forEach((item) => {
        const currentAnswer = answers[item.id];
        if (!Array.isArray(currentAnswer)) {
            const isRight =
                (item.answer && item.answer === +currentAnswer) || +currentAnswer === getCorrectAnswersId(item)[0];
            isRight && result++;
        } else {
            const currentAnswerAsNumber = currentAnswer.map((answer) => +answer);
            checkIsEqualArrays(currentAnswerAsNumber, getCorrectAnswersId(item)) && result++;
        }
    });
    return result;
};

const getCorrectAnswersId = (question: TQuestion): number[] => {
    return question.answers.filter((item) => item.is_right).map((item) => item.id);
};
