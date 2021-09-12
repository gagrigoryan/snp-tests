import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

type HeaderProps = {
    username: string;
    onLogout?: () => void;
};

const Header: React.FC<HeaderProps> = ({ username, onLogout }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link to="/">
                    <h1 className={styles.logo}>Our Logo</h1>
                </Link>
                <div className={styles.user}>
                    <span className={styles.username}>{username}</span>
                    <button onClick={onLogout} className={styles.logout}>
                        Выйти
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
