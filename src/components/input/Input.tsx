import React from "react";
import clsx from "clsx";
import styles from "./input.module.scss";

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: string;
    className?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ error, className, ...props }, ref) => {
    return (
        <label className={clsx(styles.container, className)}>
            <input ref={ref} className={clsx(styles.input, error && styles.inputError)} {...props} />
            {error && <span className={styles.error}>{error}</span>}
        </label>
    );
});

Input.displayName = "Input";
export default Input;
