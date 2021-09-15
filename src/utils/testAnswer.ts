import { TTest } from "../types/test";
import { TAnswer } from "../types/answer";

export const addTestAnswer = (tests: TTest[], testId: number, questionId: number, answer: TAnswer): TTest[] => {
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = test.questions.map((question) => {
                if (question.id === questionId) {
                    question.answers = [...question.answers, answer];
                }
                return question;
            });
        }
        return test;
    });
};

export const removeTestAnswer = (tests: TTest[], testId: number, questionId: number, answerId: number): TTest[] => {
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = test.questions.map((question) => {
                if (question.id === questionId) {
                    question.answers = question.answers.filter((answer) => answer.id !== answerId);
                }
                return question;
            });
        }
        return test;
    });
};

export const updateTestAnswer = (tests: TTest[], testId: number, questionId: number, answer: TAnswer): TTest[] => {
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = test.questions.map((question) => {
                if (question.id === questionId) {
                    question.answers = question.answers.map((item) => (answer.id === item.id ? answer : item));
                }
                return question;
            });
        }
        return test;
    });
};
