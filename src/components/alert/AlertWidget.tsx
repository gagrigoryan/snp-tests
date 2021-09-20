import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import styles from "./alert.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector } from "../../models/alert/selectors";
import { AlertTypeEnum } from "../../types/alert";
import { setAlert } from "../../models/alert/slice";

const AlertWidget: React.FC = () => {
    const dispatch = useDispatch();
    const alert = useSelector(alertSelector);
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (alert) {
            setShow(true);
            if (alert.type !== AlertTypeEnum.Loading) {
                setTimeout(() => {
                    setShow(false);
                    dispatch(setAlert(null));
                }, 2000);
            }
        }
    }, [alert, dispatch]);

    return <>{show && alert && <Alert className={styles.alertWrapper} {...alert} />}</>;
};

export default AlertWidget;
