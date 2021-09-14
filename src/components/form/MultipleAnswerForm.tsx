import React, { useEffect, useState } from "react";
import styles from "./form.module.scss";
import { Control, useForm } from "react-hook-form";
import TextField from "../fields/TextField";
import { TAnswer } from "../../types/answer";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";
import { useDispatch } from "react-redux";
import { TQuestion } from "../../types/question";
import { createAnswer, removeAnswer, updateAnswer } from "../../models/answers/slice";

type AnswerItemType = TAnswer & {
    onAnswerChange: (data: TAnswer) => void;
    onDelete: (id: TAnswer) => void;
    control: Control;
};

type MultipleAnswerFormProps = {
    testId: number;
    question: TQuestion;
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

const MultipleAnswerItem: React.FC<AnswerItemType> = ({
    text,
    is_right,
    onAnswerChange,
    onDelete,
    control,
    ...props
}) => {
    const [checked, setChecked] = useState<boolean>(is_right);
    const [value, setValue] = useState<string>(text);

    useEffect(() => {
        onAnswerChange({
            ...props,
            text: value,
            is_right: checked,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked, value]);

    const onDeleteClick = () => {
        onDelete({
            ...props,
            text: value,
            is_right: checked,
        });
    };

    return (
        <div className={styles.answerItem}>
            <Checkbox label="" defaultChecked={checked} onChange={(value: any) => setChecked(value)} />
            <TextField
                control={control}
                name={`text-${props.id}`}
                placeholder="Введите текст ответа"
                defaultValue={value}
                onChange={(e: any) => setValue(e.target.value)}
                rules={{
                    required: { value: true, message: "Введите текст ответа" },
                }}
            />
            <span onClick={onDeleteClick} className={styles.link}>
                Удалить
            </span>
        </div>
    );
};

const MultipleAnswerForm: React.FC<MultipleAnswerFormProps> = ({ testId, question }) => {
    const { control, handleSubmit } = useForm({
        mode: "onTouched",
    });
    const [answers, setAnswers] = useState<TAnswer[]>(question.answers.length > 0 ? question.answers : initialAnswers);
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

    const onAnswerChange = (data: TAnswer) => {
        setAnswers(answers.map((answer) => (answer.id === data.id ? data : answer)));
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

    return (
        <div className={styles.answerForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span onClick={handleCreate} className={styles.link}>
                    Добавить
                </span>
                <div className={styles.answersWrapper}>
                    {answers.map((item) => (
                        <MultipleAnswerItem
                            key={`${item.id}`}
                            {...item}
                            onAnswerChange={onAnswerChange}
                            onDelete={handleDelete}
                            control={control}
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
