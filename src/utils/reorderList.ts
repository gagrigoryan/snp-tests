import { TTest } from "../types/test";
import { TAnswer } from "../types/answer";

export const reorderList = <T>(list: T[], startIndex: number, endIndex: number): T[] => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

export const reorderTestAnswers = (
    tests: TTest[],
    testId: number,
    questionId: number,
    startIndex: number,
    endIndex: number
): TTest[] => {
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = test.questions.map((question) => {
                if (question.id === questionId) {
                    question.answers = reorderList<TAnswer>(question.answers, startIndex, endIndex);
                }
                return question;
            });
        }
        return test;
    });
};
