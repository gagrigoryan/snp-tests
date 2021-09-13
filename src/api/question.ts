import { apiRequest } from "./apiRequest";
import { TQuestion } from "../types/question";

export const postQuestion = async (id: number, body: TQuestion): Promise<TQuestion> =>
    apiRequest({
        path: `tests/${id}/questions`,
        method: "POST",
        body,
    });

export const deleteQuestion = async (id: number) =>
    apiRequest({
        path: `questions/${id}`,
        method: "DELETE",
    });
