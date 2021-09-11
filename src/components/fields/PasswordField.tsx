import React from "react";
import { ControlledFieldProps } from "./ControlledFieldProps";
import TextField from "./TextField";

export const PasswordFieldPlaceholder = "Пароль";

const PasswordField: React.FC<ControlledFieldProps & { placeholder?: string }> = ({
    control,
    name,
    placeholder,
    rules,
    ...props
}) => {
    return (
        <TextField
            {...props}
            control={control}
            name={name}
            type="password"
            placeholder={placeholder || PasswordFieldPlaceholder}
            rules={{
                required: { value: true, message: "Введите пароль" },
                pattern: {
                    value: /^.{6,}$/,
                    message: "Пароль слишком коротки (меньше 6 знаков)",
                },
                ...rules,
            }}
        />
    );
};

export default PasswordField;
