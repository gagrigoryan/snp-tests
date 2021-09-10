import React, { useEffect } from "react";
import styles from "./popupLayout.module.scss";

type PopupLayoutProps = {
    onClose: () => void;
    className?: string;
};

const PopupLayout: React.FC<PopupLayoutProps> = ({ onClose, children }) => {
    useEffect(() => {
        const onKeyDown: React.KeyboardEventHandler = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        // @ts-ignore
        document.addEventListener("keydown", onKeyDown);

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.marginRight = scrollbarWidth + "px";
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "inherit";
            document.body.style.marginRight = "0";
            // @ts-ignore
            document.removeEventListener("keydown", onKeyDown);
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
