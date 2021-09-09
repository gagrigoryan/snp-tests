import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

type ButtonProps = {
    disabled?: boolean;
    outlined?: boolean;
    onClick?: React.MouseEventHandler;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ className, disabled, outlined, onClick, children }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                disabled && styles.disabledButton,
                outlined && styles.outlinedButton,
                styles.baseButton,
                className
            )}>
            {children}
        </button>
    );
};

export default Button;
