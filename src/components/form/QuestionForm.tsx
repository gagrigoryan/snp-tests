import React, { useEffect, useState } from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import TextField from "../fields/TextField";
import Button from "../button/Button";
import { QuestionTypesEnum, TQuestion } from "../../types/question";
import Select from "../select/Select";
import { getQuestionTypeAsText } from "../../utils/getQuestionTypeAsText";

export type QuestionFormProps = {
    onSubmit: (data: TQuestion) => void;
    defaultValues?: TQuestion;
};

export type QuestionSelectItem = {
    label: string;
    value: QuestionTypesEnum;
};

const items: QuestionSelectItem[] = [
    {
        label: getQuestionTypeAsText(QuestionTypesEnum.Single),
        value: QuestionTypesEnum.Single,
    },
    {
        label: getQuestionTypeAsText(QuestionTypesEnum.Multiple),
        value: QuestionTypesEnum.Multiple,
    },
    {
        label: getQuestionTypeAsText(QuestionTypesEnum.Number),
        value: QuestionTypesEnum.Number,
    },
];

const getItemByValue = (value: QuestionTypesEnum) => {
    switch (value) {
        case QuestionTypesEnum.Single:
            return items[0];
        case QuestionTypesEnum.Multiple:
            return items[1];
        case QuestionTypesEnum.Number:
            return items[2];
    }
};

const QuestionForm: React.FC<QuestionFormProps> = ({ defaultValues, onSubmit }) => {
    const { control, handleSubmit, setValue } = useForm({
        mode: "onTouched",
    });
    const [type, setType] = useState<QuestionSelectItem>(items[0]);

    const submitHandler = (data: any) => {
        onSubmit({
            ...data,
            question_type: type.value,
        });
    };

    useEffect(() => {
        setValue("title", defaultValues?.title);
    }, [defaultValues, setValue]);

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <TextField
                    control={control}
                    name="title"
                    className={styles.field}
                    defaultValue={defaultValues?.title}
                    placeholder="Название вопроса"
                    rules={{
                        required: { value: true, message: "Введите название вопроса" },
                    }}
                />
                <Select
                    className={styles.selectField}
                    defaultItem={defaultValues ? getItemByValue(defaultValues.question_type) : items[0]}
                    onSelect={(type) => setType(type)}
                    items={items}
                />
                <Button type="submit">Сохранить</Button>
            </form>
        </div>
    );
};

export default QuestionForm;
