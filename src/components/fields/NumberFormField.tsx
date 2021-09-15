import React from "react";
import { ControlledFieldProps } from "./ControlledFieldProps";
import TextField from "./TextField";

export const NumberFormFieldPlaceholder = "Введите ответ";

const NumberFormField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <TextField
            {...props}
            control={control}
            name={name}
            type="number"
            placeholder={NumberFormFieldPlaceholder}
            rules={{
                required: { value: true, message: "Введите ответ вопроса" },
            }}
        />
    );
};

export default NumberFormField;
