import React from "react";
import styles from "./question.module.scss";
import { QuestionTypesEnum, TQuestion } from "../../types/question";
import { TAnswer } from "../../types/answer";
import { Control, UseFormRegisterReturn } from "react-hook-form";
import TextField from "../fields/TextField";
import MultipleAnswerGroup from "./MultipleAnswerGroup";
import clsx from "clsx";

type QuestionProps = {
    question: TQuestion;
    name: string;
    control: Control;
    register: UseFormRegisterReturn;
};

type AnswersFieldProps = Omit<QuestionProps, "question"> & {
    answers: TAnswer[];
};

type AnswersFieldType = {
    [key in QuestionTypesEnum]: (props: AnswersFieldProps) => React.ReactElement;
};

const QuestionGroups: AnswersFieldType = {
    [QuestionTypesEnum.Number]: (props) => (
        <TextField {...props} rules={{ required: { value: true, message: "Введите числовой ответ" } }} />
    ),
    [QuestionTypesEnum.Single]: (props) => <MultipleAnswerGroup {...props} />,
    [QuestionTypesEnum.Multiple]: (props) => <MultipleAnswerGroup {...props} multiple />,
};

const Question: React.FC<QuestionProps> = ({ question, name, control, ...props }) => {
    const AnswerField = QuestionGroups[question.question_type];

    return (
        <div className={clsx(styles.container)}>
            <h2 className={styles.title}>{question.title}</h2>
            <AnswerField {...props} name={name} control={control} answers={question.answers} />
        </div>
    );
};

export default Question;
