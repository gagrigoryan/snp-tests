import React, { useEffect } from "react";
import styles from "./homePage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { changeSort, getTests } from "../models/tests/slice";
import { testsSelector, testsSortSelector } from "../models/tests/selectors";
import TestCard from "../components/test-card/TestCard";
import { isAdminSelector } from "../models/user/selectors";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
import { SortQueryEnum } from "../types/sort";
import ArrowIcon from "../components/icons/ArrowIcon";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const tests = useSelector(testsSelector);
    const isAdmin = useSelector(isAdminSelector);
    const sort = useSelector(testsSortSelector);

    useEffect(() => {
        dispatch(getTests());
    }, [dispatch]);

    const onSortClick = () => {
        if (sort === SortQueryEnum.CreatedAtAsc) {
            dispatch(changeSort(SortQueryEnum.CreatedAtDesc));
        } else {
            dispatch(changeSort(SortQueryEnum.CreatedAtAsc));
        }
    };

    return (
        <PageLayout title="Главная страница">
            <div className={styles.container}>
                <div className={styles.actionsWrapper}>
                    <Link to="/create">
                        <Button>Создать</Button>
                    </Link>
                    <span
                        onClick={onSortClick}
                        className={sort === SortQueryEnum.CreatedAtDesc ? styles.filter : styles.inverseFilter}>
                        По дате <ArrowIcon />
                    </span>
                </div>
                <div className={styles.testsWrapper}>
                    {tests.map((test) => (
                        <TestCard key={test.id} editable={isAdmin} {...test} />
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default HomePage;
