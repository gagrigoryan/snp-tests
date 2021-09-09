import React from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import Button from "../button/Button";

const LoginForm: React.FC = () => {
    const { control, handleSubmit } = useForm({
        mode: "onTouched",
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <EmailField className={styles.field} control={control} name="email" />
            <PasswordField className={styles.field} control={control} name="password" />
            <Button className={styles.button} type="submit">
                Войти
            </Button>
        </form>
    );
};

export default LoginForm;
