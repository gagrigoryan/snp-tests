import { apiRequest } from "./apiRequest";

export const deleteQuestion = async (id: number) =>
    apiRequest({
        path: `questions/${id}`,
        method: "DELETE",
    });
