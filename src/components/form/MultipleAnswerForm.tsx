import React, { useEffect, useState } from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import { TAnswer } from "../../types/answer";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { TQuestion } from "../../types/question";
import { createAnswer, removeAnswer, updateAnswer } from "../../models/answers/slice";
import MultipleAnswerField from "../fields/MultipleAnswerField";
import { prepareAnswerDataOnChange } from "../../utils/prepareAnswerDataOnChange";

type MultipleAnswerFormProps = {
    testId: number;
    question: TQuestion;
    multiple?: boolean;
};

const initialAnswers: TAnswer[] = [
    {
        id: -1,
        text: "",
        is_right: false,
        isCreated: true,
    },
    {
        id: -2,
        text: "",
        is_right: true,
        isCreated: true,
    },
];

const getCorrectAnswers = (answers: TAnswer[]): TAnswer[] => {
    return answers.length >= 2 ? answers : initialAnswers;
};

const MultipleAnswerForm: React.FC<MultipleAnswerFormProps> = ({ testId, question, multiple }) => {
    const { control, handleSubmit } = useForm({
        mode: "onTouched",
    });
    const [answers, setAnswers] = useState<TAnswer[]>(getCorrectAnswers(question.answers));
    const dispatch = useDispatch();

    const handleCreate = () => {
        setAnswers([
            ...answers,
            {
                id: -answers.length - 1,
                text: "",
                is_right: false,
                isCreated: true,
            },
        ]);
    };

    const handleDelete = (data: TAnswer) => {
        if (answers.length > 2) {
            setAnswers(
                answers.filter((answer) => {
                    return answer.id !== data.id;
                })
            );
            !data.isCreated &&
                dispatch(
                    removeAnswer({
                        id: data.id,
                        testId,
                        questionId: question.id,
                    })
                );
        }
    };

    const onAnswerChange = (answer: TAnswer) => {
        setAnswers(prepareAnswerDataOnChange(answers, answer, !!multiple));
    };

    const onSubmit = () => {
        answers.forEach((answer) => {
            const body = {
                testId,
                questionId: question.id,
                answer,
            };
            answer.isCreated ? dispatch(createAnswer(body)) : dispatch(updateAnswer(body));
        });
    };

    useEffect(() => {
        setAnswers(getCorrectAnswers(question.answers));
    }, [question]);

    return (
        <div className={styles.answerForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span onClick={handleCreate} className={styles.link}>
                    Добавить
                </span>
                <div className={styles.answersWrapper}>
                    {answers.map((item) => (
                        <MultipleAnswerField
                            key={`${item.id}`}
                            {...item}
                            onAnswerChange={onAnswerChange}
                            onDelete={handleDelete}
                            control={control}
                            multiple={multiple}
                        />
                    ))}
                </div>
                <Button outlined className={styles.button} type="submit">
                    Сохранить ответы
                </Button>
            </form>
        </div>
    );
};

export default MultipleAnswerForm;
