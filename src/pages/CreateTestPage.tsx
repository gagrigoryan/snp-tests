import React from "react";
import styles from "./testPage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";
import TestForm from "../components/form/TestForm";
import { TestRequest } from "../types/test";
import { useDispatch } from "react-redux";
import { createTest } from "../models/tests/slice";

const CreateTestPage: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmit = (data: TestRequest) => {
        dispatch(createTest(data));
    };

    return (
        <PageLayout title="Создать тест">
            <div className={styles.container}>
                <TestForm onSubmit={onSubmit} />
            </div>
        </PageLayout>
    );
};

export default CreateTestPage;
