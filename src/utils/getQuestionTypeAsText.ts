import { QuestionTypesEnum } from "../types/question";

export const getQuestionTypeAsText = (type: QuestionTypesEnum) => {
    switch (type) {
        case QuestionTypesEnum.Single:
            return "Один из списка";
        case QuestionTypesEnum.Multiple:
            return "Несколько из списка";
        case QuestionTypesEnum.Number:
            return "Численный ответ";
    }
};
