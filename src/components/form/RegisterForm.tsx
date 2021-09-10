import React from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import PasswordField from "../fields/PasswordField";
import Button from "../button/Button";
import TextField from "../fields/TextField";
import CheckboxField from "../fields/CheckboxField";
import { SignUpRequest } from "../../types/auth";

const RegisterForm: React.FC = () => {
    const { control, handleSubmit, watch } = useForm({
        mode: "onTouched",
    });

    const onSubmit = async (data: SignUpRequest) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                className={styles.field}
                control={control}
                placeholder="Имя пользователя"
                name="username"
                rules={{
                    required: { value: true, message: "Введите имя пользователя" },
                }}
            />
            <PasswordField className={styles.field} control={control} name="password" />
            <PasswordField
                className={styles.field}
                control={control}
                name="password_confirmation"
                placeholder="Подтверждение пароля"
                rules={{
                    validate: (value: string) => value === watch("password") || "Пароли не совпадают",
                }}
            />
            <CheckboxField
                className={styles.field}
                label="Вы являетесь администратором"
                control={control}
                name="is_admin"
            />
            <Button className={styles.button} type="submit">
                зарегистрироваться
            </Button>
        </form>
    );
};

export default RegisterForm;
