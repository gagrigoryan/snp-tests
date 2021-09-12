import React, { useEffect } from "react";
import styles from "./homePage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../models/tests/slice";
import { testsSelector } from "../models/tests/selectors";
import TestCard from "../components/test-card/TestCard";
import { isAdminSelector } from "../models/user/selectors";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const tests = useSelector(testsSelector);
    const isAdmin = useSelector(isAdminSelector);

    useEffect(() => {
        dispatch(getTests());
    }, [dispatch]);

    return (
        <PageLayout title="Главная страница">
            <div className={styles.container}>
                <div className={styles.actionsWrapper}>
                    <Link to="/create">
                        <Button>Создать</Button>
                    </Link>
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
