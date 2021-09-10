import React from "react";
import styles from "./questionCard.module.scss";
import clsx from "clsx";
import PencilIcon from "../icons/PencilIcon";
import TrashIcon from "../icons/TrashIcon";

export enum QuestionTypesEnum {
    Single = "single",
    Multiple = "multiple",
    Number = "number",
}

type QuestionCardProps = {
    title: string;
    type?: QuestionTypesEnum;
    className?: string;
};

const questionTypeAsText = (type: QuestionTypesEnum) => {
    switch (type) {
        case QuestionTypesEnum.Single:
            return "Один из списка";
        case QuestionTypesEnum.Multiple:
            return "Несколько из списка";
        case QuestionTypesEnum.Number:
            return "Численный ответ";
    }
};

const QuestionCard: React.FC<QuestionCardProps> = ({ title, type = QuestionTypesEnum.Single, className }) => {
    return (
        <div
            className={clsx(
                type === QuestionTypesEnum.Single
                    ? styles.pink
                    : type === QuestionTypesEnum.Multiple
                    ? styles.purple
                    : type === QuestionTypesEnum.Number
                    ? styles.green
                    : null,
                className
            )}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.type}>#{questionTypeAsText(type)}</span>
            </div>
            <div className={styles.actionWrapper}>
                <button className={styles.actionButton}>
                    <PencilIcon />
                </button>
                <button className={styles.actionButton}>
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
};

export default QuestionCard;
