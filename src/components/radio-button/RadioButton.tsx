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
    onChange?: (value: any) => void;
};

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
    ({ className, onChange, label, ...props }, ref) => {
        return (
            <label htmlFor={props.id} className={clsx(styles.container, className)}>
                <input
                    {...props}
                    onChange={(e) => onChange && onChange(e.target.checked)}
                    ref={ref}
                    type="radio"
                    className={styles.input}
                />
                <div className={styles.radio}>
                    <CheckLightIcon />
                </div>
                <span className={styles.label}>{label}</span>
            </label>
        );
    }
);

RadioButton.displayName = "RadioButton";
export default RadioButton;
