import React from "react";
import styles from "./popup.module.scss";
import PopupBase, { PopupBaseProps } from "./PopupBase";

type TestPassingPopupProps = Omit<PopupBaseProps, "title"> & {
    result: string;
};

const TestPassingPopup: React.FC<TestPassingPopupProps> = ({ result, ...props }) => {
    return (
        <PopupBase title="Результаты теста" {...props}>
            <div className={styles.resultWrapper}>
                <h1 className={styles.resultTitle}>{result}</h1>
            </div>
        </PopupBase>
    );
};

export default TestPassingPopup;
