import React from "react";
import { ControlledFieldProps } from "./ControlledFieldProps";
import TextField from "./TextField";

export const EmailFieldPlaceholder = "Email";

const EmailField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <TextField
            {...props}
            control={control}
            name={name}
            placeholder={EmailFieldPlaceholder}
            rules={{
                required: { value: true, message: "Введите эл. почту" },
                pattern: {
                    value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                    message: "Введите корректную эл. почту",
                },
            }}
        />
    );
};

export default EmailField;
