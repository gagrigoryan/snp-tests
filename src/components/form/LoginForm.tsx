import React from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import PasswordField from "../fields/PasswordField";
import Button from "../button/Button";
import TextField from "../fields/TextField";
import { SignInRequest } from "../../types/auth";

const LoginForm: React.FC = () => {
    const { control, handleSubmit } = useForm({
        mode: "onTouched",
    });

    const onSubmit = async (data: SignInRequest) => {
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
            <Button className={styles.button} type="submit">
                Войти
            </Button>
        </form>
    );
};

export default LoginForm;
