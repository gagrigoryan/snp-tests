import { TAnswer } from "../types/answer";
import { apiRequest } from "./apiRequest";

export const postAnswer = async (id: number, body: TAnswer): Promise<TAnswer> =>
    apiRequest({
        path: `questions/${id}/answers`,
        method: "POST",
        body,
    });

export const deleteAnswer = async (id: number) =>
    apiRequest({
        path: `answers/${id}`,
        method: "DELETE",
    });

export const changeAnswer = async (id: number, body: TAnswer): Promise<TAnswer> =>
    apiRequest({
        path: `answers/${id}`,
        method: "PATCH",
        body,
    });
