import React, { useEffect, useState } from "react";
import styles from "./homePage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { changeSort, createTest, getTests, setPage, setSearch } from "../models/tests/slice";
import {
    testsFetchedSelector,
    testsMetaSelector,
    testsPageSelector,
    testsSearchSelector,
    testsSelector,
    testsSortSelector,
} from "../models/tests/selectors";
import TestCard from "../components/test-card/TestCard";
import { isAdminSelector } from "../models/user/selectors";
import Button from "../components/button/Button";
import { SortQueryEnum } from "../types/sort";
import ArrowIcon from "../components/icons/ArrowIcon";
import TestPopup from "../components/popup/TestPopup";
import { TestRequest } from "../types/test";
import Pagination from "../components/pagination/Pagination";
import SearchField from "../components/fields/SearchField";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const tests = useSelector(testsSelector);
    const isAdmin = useSelector(isAdminSelector);
    const sort = useSelector(testsSortSelector);
    const isFetched = useSelector(testsFetchedSelector);
    const meta = useSelector(testsMetaSelector);
    const currentPage = useSelector(testsPageSelector);
    const search = useSelector(testsSearchSelector);
    const [testPopup, setTestPopup] = useState<boolean>(false);

    useEffect(() => {
        !isFetched && dispatch(getTests());
    }, [dispatch, isFetched]);

    const onSortClick = () => {
        if (sort === SortQueryEnum.CreatedAtAsc) {
            dispatch(changeSort(SortQueryEnum.CreatedAtDesc));
        } else {
            dispatch(changeSort(SortQueryEnum.CreatedAtAsc));
        }
    };

    const onTestSubmit = (data: TestRequest) => {
        dispatch(createTest(data));
        setTestPopup(false);
    };

    const onPageChange = (page: number) => {
        dispatch(setPage(page));
    };

    const handleSearch = (value: string) => {
        value && dispatch(setSearch(value.toLowerCase()));
    };

    const resetSearch = () => {
        dispatch(setSearch(""));
    };

    return (
        <>
            <PageLayout title="Главная страница">
                <div className={styles.container}>
                    <div className={styles.actionsWrapper}>
                        {isAdmin && <Button onClick={() => setTestPopup(true)}>Создать</Button>}
                        <span
                            onClick={onSortClick}
                            className={sort === SortQueryEnum.CreatedAtDesc ? styles.filter : styles.inverseFilter}>
                            По дате <ArrowIcon />
                        </span>
                        <SearchField onSearchClick={handleSearch} />
                        {search && (
                            <Button onClick={resetSearch} outlined className={styles.reset}>
                                Сбросить
                            </Button>
                        )}
                    </div>
                    <div className={styles.testsWrapper}>
                        {tests.map((test) => (
                            <TestCard key={test.id} editable={isAdmin} {...test} />
                        ))}
                    </div>
                    {meta && (
                        <div className={styles.pagination}>
                            <Pagination
                                totalPages={meta.total_pages}
                                currentPage={currentPage}
                                onPageChange={onPageChange}
                            />
                        </div>
                    )}
                </div>
            </PageLayout>
            {testPopup && <TestPopup onClose={() => setTestPopup(false)} onSubmit={onTestSubmit} />}
        </>
    );
};

export default HomePage;
