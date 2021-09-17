import React, { useEffect, useState } from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import TextField from "../fields/TextField";
import Button from "../button/Button";
import { QuestionTypesEnum, TQuestion } from "../../types/question";
import NumberFormField from "../fields/NumberFormField";
import SelectField, { getItemByValue, QuestionSelectItem, SELECT_FIELD_ITEMS } from "../fields/SelectField";
import MultipleAnswerForm from "./MultipleAnswerForm";

export type QuestionFormProps = {
    testId: number;
    onSubmit: (data: TQuestion) => void;
    defaultValues?: TQuestion;
};

const QuestionForm: React.FC<QuestionFormProps> = ({ testId, defaultValues, onSubmit }) => {
    const { control, handleSubmit, setValue } = useForm({
        mode: "onTouched",
    });
    const [type, setType] = useState<QuestionSelectItem>(
        defaultValues ? getItemByValue(defaultValues.question_type) : SELECT_FIELD_ITEMS[0]
    );

    const submitHandler = (data: any) => {
        onSubmit({
            ...data,
            question_type: type.value,
        });
    };

    useEffect(() => {
        setValue("title", defaultValues?.title);
        setValue("answer", defaultValues?.answer);
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
                <SelectField
                    className={defaultValues ? styles.hiddenSelectField : styles.selectField}
                    defaultItem={defaultValues && getItemByValue(defaultValues.question_type)}
                    onSelect={(selectedType) => setType(selectedType)}
                />
                {type.value === QuestionTypesEnum.Number && (
                    <NumberFormField className={styles.field} control={control} name="answer" />
                )}
                <Button type="submit">Сохранить</Button>
            </form>
            {type.value !== QuestionTypesEnum.Number && defaultValues && (
                <MultipleAnswerForm
                    testId={testId}
                    question={defaultValues}
                    multiple={type.value === QuestionTypesEnum.Multiple}
                />
            )}
        </div>
    );
};

export default QuestionForm;
