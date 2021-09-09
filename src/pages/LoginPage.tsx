import React from "react";
import styles from "./loginPage.module.scss";
import LoginForm from "../components/form/LoginForm";

const LoginPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logoWrapper}>
                    <h1 className={styles.logo}>Our Logo</h1>
                    <h3 className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur</h3>
                </div>
                <p className={styles.text}>
                    Alias blanditiis dolores expedita nemo odio. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Accusantium, adipisci beatae cupiditate dolorem
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.formWrapper}>
                    <h2 className={styles.formTitle}>Вход в личный кабинет</h2>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
