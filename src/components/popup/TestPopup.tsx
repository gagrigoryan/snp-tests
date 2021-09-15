import React from "react";
import ActionPopup, { ActionPopupProps } from "./ActionPopup";
import { useForm } from "react-hook-form";
import TextField from "../fields/TextField";
import { TestRequest } from "../../types/test";

type TestPopupProps = Omit<ActionPopupProps, "title" | "onSuccess"> & {
    onSubmit: (data: TestRequest) => void;
};

const TestPopup: React.FC<TestPopupProps> = ({ onSubmit, ...props }) => {
    const { control, handleSubmit } = useForm({
        mode: "onTouched",
    });

    const handleSuccess = () => {
        handleSubmit((data: TestRequest) => {
            onSubmit(data);
        })();
    };

    return (
        <ActionPopup {...props} title="Создать тест" onSuccess={handleSuccess}>
            <TextField
                control={control}
                name="title"
                placeholder="Название теста"
                rules={{
                    required: { value: true, message: "Введите название теста" },
                }}
            />
        </ActionPopup>
    );
};

export default TestPopup;
