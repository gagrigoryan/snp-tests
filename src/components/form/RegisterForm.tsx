import React from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import PasswordField from "../fields/PasswordField";
import Button from "../button/Button";
import TextField from "../fields/TextField";
import CheckboxField from "../fields/CheckboxField";
import { RegisterRequest } from "../../types/auth";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../models/user/slice";
import { registerFailedSelector } from "../../models/user/selectors";

const RegisterForm: React.FC = () => {
    const { control, handleSubmit, watch } = useForm({
        mode: "onTouched",
    });
    const dispatch = useDispatch();
    const registerFailed = useSelector(registerFailedSelector);

    const onSubmit = (data: RegisterRequest) => {
        console.log(data);
        dispatch(userRegister(data));
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
            {registerFailed && <p className={styles.error}>{registerFailed}</p>}
        </form>
    );
};

export default RegisterForm;
