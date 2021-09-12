import { TTest } from "../types/test";

export const getTestById = (id: number, tests: TTest[]): TTest | undefined => tests.find((test) => test.id === id);
