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

type TestCardProps = TTest & {
    editable?: boolean;
    className?: string;
};

const TestCard: React.FC<TestCardProps> = ({ id, title, editable, className }) => {
    const [deletePopup, setDeletePopup] = useState<boolean>(false);
    const dispatch = useDispatch();

    const onDeleteClick = () => {
        dispatch(removeTest(id));
    };

    return (
        <>
            <div className={clsx(styles.container, className)}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.action}>
                    {editable && (
                        <div className={styles.buttonWrapper}>
                            <button className={styles.actionButton}>
                                <PencilIcon />
                            </button>
                            <button onClick={() => setDeletePopup(true)} className={styles.actionButton}>
                                <TrashIcon />
                            </button>
                        </div>
                    )}
                    <Button className={styles.button}>Пройти тест</Button>
                </div>
            </div>
            {deletePopup && (
                <ActionPopup
                    title={`Вы хотите удалить тест ${id}`}
                    onClose={() => setDeletePopup(false)}
                    onSuccess={onDeleteClick}
                />
            )}
        </>
    );
};

export default TestCard;
