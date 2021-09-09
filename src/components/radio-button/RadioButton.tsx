import React from "react";
import styles from "./radioButton.module.scss";
import clsx from "clsx";
import CheckLightIcon from "../icons/CheckLightIcon";

export type RadioButtonProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string | React.ReactElement;
    className?: string;
};

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(({ className, label, ...props }, ref) => {
    return (
        <label className={clsx(styles.container, className)}>
            <input {...props} ref={ref} type="radio" className={styles.input} />
            <div className={styles.radio}>
                <CheckLightIcon />
            </div>
            <span className={styles.label}>{label}</span>
        </label>
    );
});

RadioButton.displayName = "RadioButton";
export default RadioButton;
