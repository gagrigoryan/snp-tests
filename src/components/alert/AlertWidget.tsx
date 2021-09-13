import React from "react";
import Alert, { AlertProps } from "./Alert";
import styles from "./alert.module.scss";

const AlertWidget: React.FC<AlertProps> = ({ ...props }) => {
    return <Alert className={styles.alertWrapper} {...props} />;
};

export default AlertWidget;
