import React, { useEffect } from "react";
import styles from "./popupLayout.module.scss";

type PopupLayoutProps = {
    onClose: React.MouseEventHandler;
    className?: string;
};

const PopupLayout: React.FC<PopupLayoutProps> = ({ onClose, children }) => {
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.marginRight = scrollbarWidth + "px";
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "inherit";
            document.body.style.marginRight = "0";
        };
    });

    return (
        <div className={styles.container} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default PopupLayout;
