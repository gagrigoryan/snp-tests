import React from "react";
import styles from "./registerPage.module.scss";
import AuthLayout from "../components/auth-layout/AuthLayout";
import { Link } from "react-router-dom";
import RegisterForm from "../components/form/RegisterForm";

const RegisterPage: React.FC = () => {
    return (
        <AuthLayout>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Регистрация</h2>
                <p className={styles.description}>Прежде чем пройти тестирование, необходимо зарегистрироваться</p>
                <RegisterForm />
                <Link to="/login">
                    <a className={styles.link} href={"/login"}>
                        Авторизоваться
                    </a>
                </Link>
            </div>
        </AuthLayout>
    );
};

export default RegisterPage;
