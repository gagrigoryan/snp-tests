import React from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import PasswordField from "../fields/PasswordField";
import Button from "../button/Button";
import TextField from "../fields/TextField";
import { LoginRequest } from "../../types/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../models/user/slice";
import { loginFailedSelector } from "../../models/user/selectors";

const LoginForm: React.FC = () => {
    const { control, handleSubmit } = useForm({
        mode: "onTouched",
    });
    const dispatch = useDispatch();
    const loginFailed = useSelector(loginFailedSelector);

    const onSubmit = (data: LoginRequest) => {
        console.log(data);
        dispatch(userLogin(data));
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
            {loginFailed && <p className={styles.error}>{loginFailed}</p>}
        </form>
    );
};

export default LoginForm;
