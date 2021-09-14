import React from "react";
import styles from "./checkbox.module.scss";
import clsx from "clsx";
import CheckIcon from "../icons/CheckIcon";

export type CheckboxProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string | React.ReactElement;
    className?: string;
    onChange?: (value: any) => void;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, label, onChange, ...props }, ref) => {
    return (
        <label className={clsx(styles.container, className)}>
            <input
                ref={ref}
                type="checkbox"
                className={styles.input}
                onChange={(e) => onChange && onChange(e.target.checked)}
                {...props}
            />
            <div className={styles.box}>
                <CheckIcon />
            </div>
            <span className={styles.label}>{label}</span>
        </label>
    );
});

Checkbox.displayName = "Checkbox";
export default Checkbox;
