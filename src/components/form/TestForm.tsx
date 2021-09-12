import React from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import TextField from "../fields/TextField";
import Button from "../button/Button";
import { TTest } from "../../types/test";

type TestFormProps = {
    onSubmit: (data: any) => void;
    defaultValues?: TTest;
};

const TestForm: React.FC<TestFormProps> = ({ defaultValues, onSubmit }) => {
    const { control, handleSubmit } = useForm({
        mode: "onTouched",
    });

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    control={control}
                    name="title"
                    className={styles.field}
                    defaultValue={defaultValues?.title}
                    placeholder="Название теста"
                    rules={{
                        required: { value: true, message: "Введите название теста" },
                    }}
                />
                <Button type="submit">Сохранить</Button>
            </form>
        </div>
    );
};

export default TestForm;
