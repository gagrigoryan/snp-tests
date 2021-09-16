import React, { useEffect, useState } from "react";
import styles from "../form/form.module.scss";
import Checkbox from "../checkbox/Checkbox";
import TextField from "./TextField";
import { TAnswer } from "../../types/answer";
import { Control } from "react-hook-form";
import RadioButton from "../radio-button/RadioButton";

type MultipleAnswerProps = TAnswer & {
    onAnswerChange: (data: TAnswer) => void;
    onDelete: (id: TAnswer) => void;
    control: Control;
    multiple?: boolean;
};

const MultipleAnswerField: React.FC<MultipleAnswerProps> = ({
    text,
    is_right,
    onAnswerChange,
    onDelete,
    control,
    multiple,
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
            {multiple ? (
                <Checkbox large label="" defaultChecked={checked} onChange={(e) => setChecked(e.target.checked)} />
            ) : (
                <RadioButton
                    name="answer-field"
                    label=""
                    defaultChecked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
            )}
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

export default MultipleAnswerField;
