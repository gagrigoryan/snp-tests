import React, { useEffect, useState } from "react";
import styles from "./testPage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { testsFetchedSelector, testsSelector } from "../models/tests/selectors";
import { getCurrentTest, updateTest } from "../models/tests/slice";
import { TTest } from "../types/test";
import { getTestById } from "../utils/getTestById";
import TestForm from "../components/form/TestForm";

interface ParamsType {
    id: string;
}

const isNumeric = (value: string): boolean => {
    return /^\d+$/.test(value);
};

const TestPage: React.FC = () => {
    const { id } = useParams<ParamsType>();
    const dispatch = useDispatch();
    const tests = useSelector(testsSelector);
    const isFetched = useSelector(testsFetchedSelector);
    const [currentTest, setCurrentTest] = useState<TTest>();

    useEffect(() => {
        if (isNumeric(id) && !isFetched) {
            dispatch(getCurrentTest(+id));
        }
    }, [dispatch, id, isFetched]);

    useEffect(() => {
        if (tests.length > 0 && isNumeric(id)) {
            setCurrentTest(getTestById(+id, tests));
        }
    }, [tests, id]);

    const onSubmit = (data: TTest) => {
        currentTest &&
            dispatch(
                updateTest({
                    ...data,
                    id: currentTest.id,
                })
            );
    };

    return (
        <PageLayout title="Edit page">
            {currentTest && (
                <div className={styles.container}>
                    <TestForm defaultValues={currentTest} onSubmit={onSubmit} />
                </div>
            )}
        </PageLayout>
    );
};

export default TestPage;
