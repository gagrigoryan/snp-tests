import React from "react";
import { useController } from "react-hook-form";
import Checkbox, { CheckboxProps } from "../checkbox/Checkbox";
import { ControlledFieldProps } from "./ControlledFieldProps";

const CheckboxField: React.FC<CheckboxProps & ControlledFieldProps> = ({
    control,
    name,
    label,
    rules,
    shouldUnregister,
    required,
    defaultChecked,
    ...props
}) => {
    const {
        field: { ref, ...inputProps },
    } = useController({
        name,
        control,
        rules,
        defaultValue: defaultChecked,
        shouldUnregister: true,
    });
    return <Checkbox {...props} ref={ref} {...inputProps} defaultChecked={defaultChecked} label={label} />;
};

export default CheckboxField;
