import { TestRequest, TTest } from "../types/test";
import { apiRequest } from "./apiRequest";
import { SortQueryEnum } from "../types/sort";

type TestQueryOptions = {
    sort?: SortQueryEnum;
};

const getTestsPath = ({ sort }: TestQueryOptions) => {
    const sortParameter = sort ? `sort=${sort}` : "";
    return `tests?${sortParameter}`;
};

export const fetchTests = async (params: TestQueryOptions) =>
    apiRequest({
        path: getTestsPath(params),
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
