import React from "react";
import styles from "./errorPage.module.scss";
import woodIcon from "../assets/wood-icon.png";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const ErrorPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <a href="/" className={styles.logo}>
                Our Logo
            </a>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>404</h1>
                <img className={styles.image} src={woodIcon} alt="" />
                <p className={styles.text}>Извините! Страница, которую Вы ищете, не может быть найдена</p>
                <Link to="/">
                    <Button>На главную</Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
