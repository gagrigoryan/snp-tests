import React from "react";
import styles from "./popup.module.scss";
import PopupBase, { PopupBaseProps } from "./PopupBase";
import { Link } from "react-router-dom";

type TestPassingPopupProps = Omit<PopupBaseProps, "title"> & {
    result: string;
};

const TestPassingPopup: React.FC<TestPassingPopupProps> = ({ result, ...props }) => {
    return (
        <PopupBase title="Результаты теста" {...props}>
            <div className={styles.resultWrapper}>
                <h1 className={styles.resultTitle}>{result}</h1>
                <Link to="/">
                    <span className={styles.link}>На главную</span>
                </Link>
            </div>
        </PopupBase>
    );
};

export default TestPassingPopup;
