import React from "react";
import styles from "./questionWidget.module.scss";
import QuestionForm, { QuestionFormProps } from "../form/QuestionForm";

type QuestionWidgetProps = QuestionFormProps & {};

const QuestionWidget: React.FC<QuestionWidgetProps> = ({ ...props }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Создание вопроса</h2>
            <QuestionForm {...props} />
        </div>
    );
};

export default QuestionWidget;
