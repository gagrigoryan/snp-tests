import { TTest } from "../types/test";
import { SortQueryEnum } from "../types/sort";

type ReturnedType = {
    tests: TTest[];
    totalPages: number;
    totalCount: number;
};

export const addTestBasedOnSort = (
    tests: TTest[],
    test: TTest,
    sort: SortQueryEnum,
    currentPage: number,
    totalPages: number,
    totalCount: number,
    perPage: number
): ReturnedType => {
    const result: ReturnedType = {
        tests,
        totalPages,
        totalCount: totalCount + 1,
    };
    console.log(totalPages, totalCount);
    if (totalCount === totalPages * perPage) {
        result.totalPages++;
    }
    if (sort === SortQueryEnum.CreatedAtAsc && currentPage === totalPages) {
        if (tests.length <= perPage - 1) {
            result.tests = [...tests, test];
        }
    }
    if (sort === SortQueryEnum.CreatedAtDesc && currentPage === 1) {
        result.tests = [test, ...tests];
        if (tests.length === perPage) {
            result.tests.pop();
        }
    }
    return result;
};
