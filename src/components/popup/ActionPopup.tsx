import React from "react";
import styles from "./popup.module.scss";
import PopupBase, { PopupBaseProps } from "./PopupBase";
import Button from "../button/Button";

export type ActionPopupProps = PopupBaseProps & {
    onSuccess?: () => void;
};

const ActionPopup: React.FC<ActionPopupProps> = ({ title, onSuccess, onClose, children }) => {
    return (
        <PopupBase title={title} onClose={onClose}>
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
                <div className={styles.actionWrapper}>
                    <Button onClick={onClose} className={styles.actionButton} outlined>
                        Отмена
                    </Button>
                    <Button onClick={onSuccess} className={styles.actionButton}>
                        Подтвердить
                    </Button>
                </div>
            </div>
        </PopupBase>
    );
};

export default ActionPopup;
