import { TTest } from "../types/test";
import { TQuestion } from "../types/question";

export const addQuestionToTest = (tests: TTest[], testId: number, question: TQuestion): TTest[] => {
    console.log("ID", testId, question);
    return tests.map((test) => {
        if (test.id === testId) {
            test.questions = [...test.questions, question];
            return test;
        }
        return test;
    });
};
