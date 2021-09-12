import React from "react";
import styles from "./createTestPage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";
import TestForm from "../components/form/TestForm";

const CreateTestPage: React.FC = () => {
    return (
        <PageLayout title="Создать тест">
            <div className={styles.container}>
                <TestForm />
            </div>
        </PageLayout>
    );
};

export default CreateTestPage;
