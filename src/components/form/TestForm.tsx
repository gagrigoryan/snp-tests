import React from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import TextField from "../fields/TextField";
import Button from "../button/Button";
import { TestRequest } from "../../types/test";
import { useDispatch } from "react-redux";
import { createTest } from "../../models/tests/slice";

const TestForm: React.FC = () => {
    const { control, handleSubmit } = useForm({
        mode: "onTouched",
    });
    const dispatch = useDispatch();

    const onSubmit = (data: TestRequest) => {
        console.log(data);
        dispatch(createTest(data));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    control={control}
                    name="title"
                    className={styles.field}
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
