import React from "react";
import styles from "./pageLayout.module.scss";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../models/user/selectors";
import { userLogout } from "../../models/user/slice";

type PageLayoutProps = {
    title: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(userLogout());
    };

    return (
        <div className={styles.container}>
            <Header username={user?.username} onLogout={onLogout} />
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default PageLayout;
