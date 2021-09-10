import { Control, Watch, FieldErrors } from "react-hook-form";

export type ControlledFieldProps = {
    control: Control;
    watch?: Watch;
    name: string;
    rules?: Exclude<RegisterOptions>;
    errors?: FieldErrors;
    className?: string;
    shouldUnregister?: boolean;
    onChange?: any;
    defaultValue?: any;
};
