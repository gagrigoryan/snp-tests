import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

type ButtonProps = {
    disabled?: boolean;
    outlined?: boolean;
    onClick?: React.MouseEventHandler;
    type?: "submit" | "button";
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ className, disabled, type, outlined, onClick, children }) => {
    return (
        <button
            disabled={disabled}
            type={type}
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
