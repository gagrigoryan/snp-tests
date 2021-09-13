import { TTest } from "../types/test";
import { TQuestion } from "../types/question";

export const addTestQuestion = (tests: TTest[], testId: number, question: TQuestion): TTest[] => {
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = [...test.questions, question];
        }
        return test;
    });
};

export const removeTestQuestion = (tests: TTest[], testId: number, questionId: number): TTest[] => {
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = test.questions.filter((question) => question.id !== questionId);
        }
        return test;
    });
};

export const updateTestQuestion = (tests: TTest[], testId: number, question: TQuestion): TTest[] => {
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = test.questions.map((item) => (question.id === item.id ? question : item));
        }
        return test;
    });
};
