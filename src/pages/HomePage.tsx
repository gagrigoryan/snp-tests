import React from "react";
import styles from "./homePage.module.scss";
import PageLayout from "../components/page-layout/PageLayout";

const HomePage: React.FC = () => {
    return (
        <PageLayout title="Главная страница">
            <div className={styles.container}>HomePage</div>
        </PageLayout>
    );
};

export default HomePage;
