import React, { useEffect } from "react";
import styles from "./homePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { testsSelector } from "../models/tests/selectors";
import { getTests } from "../models/tests/slice";
import TestCard from "../components/test-card/TestCard";
import { isAdminSelector } from "../models/user/selectors";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const tests = useSelector(testsSelector);
    const isAdmin = useSelector(isAdminSelector);

    useEffect(() => {
        dispatch(getTests());
    }, [dispatch]);

    useEffect(() => {
        console.log("test:", tests);
    }, [tests]);

    return (
        <div className={styles.container}>
            <div className={styles.testsWrapper}>
                {tests.map((test) => (
                    <TestCard key={test.id} editable={isAdmin} {...test} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
