import React, { useState } from "react";
import styles from "./questionCard.module.scss";
import clsx from "clsx";
import PencilIcon from "../icons/PencilIcon";
import TrashIcon from "../icons/TrashIcon";
import { QuestionTypesEnum, TQuestion } from "../../types/question";
import ActionPopup from "../popup/ActionPopup";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../../models/questions/slice";

type QuestionCardProps = TQuestion & {
    testId: number;
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

const QuestionCard: React.FC<QuestionCardProps> = ({
    id,
    testId,
    title,
    question_type = QuestionTypesEnum.Single,
    className,
}) => {
    const [deletePopup, setDeletePopup] = useState<boolean>(false);
    const dispatch = useDispatch();

    const onDeleteClick = () => {
        dispatch(removeQuestion({ id, testId }));
    };

    return (
        <>
            <div
                className={clsx(
                    question_type === QuestionTypesEnum.Single
                        ? styles.pink
                        : question_type === QuestionTypesEnum.Multiple
                        ? styles.purple
                        : question_type === QuestionTypesEnum.Number
                        ? styles.green
                        : null,
                    className
                )}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.type}>#{questionTypeAsText(question_type)}</span>
                </div>
                <div className={styles.actionWrapper}>
                    <button className={styles.actionButton}>
                        <PencilIcon />
                    </button>
                    <button onClick={() => setDeletePopup(true)} className={styles.actionButton}>
                        <TrashIcon />
                    </button>
                </div>
            </div>
            {deletePopup && (
                <ActionPopup
                    title={`Вы хотите удалить вопрос №${id}`}
                    onSuccess={onDeleteClick}
                    onClose={() => setDeletePopup(false)}
                />
            )}
        </>
    );
};

export default QuestionCard;
