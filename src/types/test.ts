import { TQuestion } from "./question";

export type TTest = {
    id: number;
    title: string;
    questions: TQuestion[];
};

export type TestRequest = {
    title: string;
};
