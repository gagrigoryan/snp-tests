import { TQuestion } from "./question";
import { TMeta } from "./meta";
import { SortQueryEnum } from "./sort";

export type TTest = {
    id: number;
    title: string;
    questions: TQuestion[];
};

export type TestRequest = {
    title: string;
};

export type TestQueryOptions = {
    sort?: SortQueryEnum;
    page?: number;
    search?: string;
};

export type TestResponse = {
    tests: TTest[];
    meta: TMeta;
};
