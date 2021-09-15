import React from "react";
import { useController } from "react-hook-form";
import Input, { InputProps } from "../input/Input";
import { ControlledFieldProps } from "./ControlledFieldProps";

const TextField: React.FC<ControlledFieldProps & InputProps> = ({
    control,
    name,
    rules,
    errors,
    shouldUnregister,
    defaultValue,
    ...props
}) => {
    const {
        field: { ref, ...inputProps },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
        defaultValue: defaultValue || "",
        shouldUnregister: shouldUnregister || true,
    });

    return (
        <Input
            {...props}
            {...inputProps}
            onChange={(e) => {
                inputProps.onChange(e);
                props.onChange && props.onChange(e);
            }}
            error={error?.message}
            ref={ref}
        />
    );
};

export default TextField;
