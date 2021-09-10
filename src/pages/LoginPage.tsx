import React from "react";
import styles from "./loginPage.module.scss";
import LoginForm from "../components/form/LoginForm";
import AuthLayout from "../components/auth-layout/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
    return (
        <AuthLayout>
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Вход в личный кабинет</h2>
                <LoginForm />
                <Link to="/register">
                    <a className={styles.link} href={"/register"}>
                        Регистрация
                    </a>
                </Link>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
