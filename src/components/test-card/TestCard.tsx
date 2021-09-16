import React, { useState } from "react";
import styles from "./testCard.module.scss";
import clsx from "clsx";
import Button from "../button/Button";
import PencilIcon from "../icons/PencilIcon";
import TrashIcon from "../icons/TrashIcon";
import { TTest } from "../../types/test";
import ActionPopup from "../popup/ActionPopup";
import { useDispatch } from "react-redux";
import { removeTest } from "../../models/tests/slice";
import { Link, useHistory } from "react-router-dom";

type TestCardProps = TTest & {
    editable?: boolean;
    className?: string;
};

const TestCard: React.FC<TestCardProps> = ({ id, title, editable, className }) => {
    const [deletePopup, setDeletePopup] = useState<boolean>(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const onDeleteClick = () => {
        dispatch(removeTest(id));
    };

    const onEditClick = () => {
        history.push(`/test/${id}`);
    };

    return (
        <>
            <div className={clsx(styles.container, className)}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.action}>
                    {editable && (
                        <div className={styles.buttonWrapper}>
                            <button onClick={onEditClick} className={styles.actionButton}>
                                <PencilIcon />
                            </button>
                            <button onClick={() => setDeletePopup(true)} className={styles.actionButton}>
                                <TrashIcon />
                            </button>
                        </div>
                    )}
                    <Link to={`/passing/${id}`}>
                        <Button className={styles.button}>Пройти тест</Button>
                    </Link>
                </div>
            </div>
            {deletePopup && (
                <ActionPopup
                    title={`Вы хотите удалить тест №${id}`}
                    onClose={() => setDeletePopup(false)}
                    onSuccess={onDeleteClick}
                />
            )}
        </>
    );
};

export default TestCard;
