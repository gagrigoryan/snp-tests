import React from "react";
import styles from "./alert.module.scss";
import clsx from "clsx";
import CheckLightIcon from "../icons/CheckLightIcon";
import { AlertTypeEnum, TAlert } from "../../types/alert";
import SpinnerIcon from "../icons/SpinnerIcon";
import ErrorIcon from "../icons/ErrorIcon";

export type AlertProps = TAlert & {
    className?: string;
};

const Alert: React.FC<AlertProps> = ({ type, message, className }) => {
    return (
        <div
            className={clsx(
                type === AlertTypeEnum.Success
                    ? styles.successContainer
                    : type === AlertTypeEnum.Loading
                    ? styles.loadingContainer
                    : type === AlertTypeEnum.Error
                    ? styles.errorContainer
                    : null,
                className
            )}>
            <div className={styles.icon}>
                {type === AlertTypeEnum.Success ? (
                    <CheckLightIcon />
                ) : type === AlertTypeEnum.Loading ? (
                    <SpinnerIcon />
                ) : (
                    <ErrorIcon />
                )}
            </div>
            <p className={styles.text}>{message}</p>
        </div>
    );
};

export default Alert;
