import React from "react";
import styles from "./testCard.module.scss";
import clsx from "clsx";
import Button from "../button/Button";
import PencilIcon from "../icons/PencilIcon";
import TrashIcon from "../icons/TrashIcon";
import { TTest } from "../../types/test";

type TestCardProps = TTest & {
    editable?: boolean;
    className?: string;
};

const TestCard: React.FC<TestCardProps> = ({ title, editable, className }) => {
    return (
        <div className={clsx(styles.container, className)}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.action}>
                {editable && (
                    <div className={styles.buttonWrapper}>
                        <button className={styles.actionButton}>
                            <PencilIcon />
                        </button>
                        <button className={styles.actionButton}>
                            <TrashIcon />
                        </button>
                    </div>
                )}
                <Button className={styles.button}>Пройти тест</Button>
            </div>
        </div>
    );
};

export default TestCard;
