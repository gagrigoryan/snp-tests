import React from "react";
import styles from "./questionWidget.module.scss";
import QuestionForm, { QuestionFormProps } from "../form/QuestionForm";
import Button from "../button/Button";

type QuestionWidgetProps = QuestionFormProps & {
    onReset?: () => void;
};

const QuestionWidget: React.FC<QuestionWidgetProps> = ({ defaultValues, onReset, ...props }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>{defaultValues ? "Редактирование вопроса" : "Создание вопроса"}</h2>
                {defaultValues && (
                    <Button onClick={onReset} outlined>
                        Отмена
                    </Button>
                )}
            </div>
            <QuestionForm {...props} defaultValues={defaultValues} />
        </div>
    );
};

export default QuestionWidget;
