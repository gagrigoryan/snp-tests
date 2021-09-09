import React from "react";
import { ControlledFieldProps } from "./ControlledFieldProps";
import TextField from "./TextField";

export const PasswordFieldPlaceholder = "Пароль";

const PasswordField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <TextField
            {...props}
            control={control}
            name={name}
            type="password"
            placeholder={PasswordFieldPlaceholder}
            rules={{
                required: { value: true, message: "Введите пароль" },
            }}
        />
    );
};

export default PasswordField;
