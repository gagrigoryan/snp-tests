import { TestRequest, TTest } from "../types/test";
import { apiRequest } from "./apiRequest";

export const fetchTests = async () =>
    apiRequest({
        path: "tests",
        method: "GET",
    });

export const postTest = async (body: TestRequest): Promise<TTest> =>
    apiRequest({
        path: "tests",
        method: "POST",
        body,
    });
