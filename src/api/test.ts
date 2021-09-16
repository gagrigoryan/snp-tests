import { TestQueryOptions, TestRequest, TestResponse, TTest } from "../types/test";
import { apiRequest } from "./apiRequest";

export const TESTS_PER_COUNT = 6;

const getTestsPath = ({ sort, page }: TestQueryOptions) => {
    const sortParameter = sort ? `sort=${sort}` : "";
    const perParameter = `&per=${TESTS_PER_COUNT}`;
    const pageParameter = page ? `&page=${page}` : "";

    return `tests?${sortParameter}${perParameter}${pageParameter}`;
};

export const fetchTests = async (params: TestQueryOptions): Promise<TestResponse> =>
    apiRequest({
        path: getTestsPath(params),
        method: "GET",
    });

export const fetchCurrentTest = async (id: number) =>
    apiRequest({
        path: `tests/${id}`,
        method: "GET",
    });

export const postTest = async (body: TestRequest): Promise<TTest> =>
    apiRequest({
        path: "tests",
        method: "POST",
        body,
    });

export const deleteTest = async (id: number) =>
    apiRequest({
        path: `tests/${id}`,
        method: "DELETE",
    });

export const changeTest = async (body: TTest): Promise<TTest> =>
    apiRequest({
        path: `tests/${body.id}`,
        method: "PATCH",
        body,
    });
