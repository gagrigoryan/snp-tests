import React from "react";
import styles from "./popupBase.module.scss";
import PopupLayout from "./PopupLayout";
import CloseIcon from "../icons/CloseIcon";

export type PopupBaseProps = {
    title: string;
    onClose: () => void;
};

const PopupBase: React.FC<PopupBaseProps> = ({ title, onClose, children }) => {
    return (
        <PopupLayout onClose={onClose}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <button className={styles.close} onClick={onClose}>
                        <CloseIcon />
                    </button>
                    <h3 className={styles.title}>{title}</h3>
                    {children}
                </div>
            </div>
        </PopupLayout>
    );
};

export default PopupBase;
