import { TTest } from "../types/test";

export const removeQuestionFromTest = (tests: TTest[], testId: number, questionId: number): TTest[] => {
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = test.questions.filter((question) => question.id !== questionId);
            return test;
        }
        return test;
    });
};
