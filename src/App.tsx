import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./models/user/slice";
import { userSelector } from "./models/user/selectors";

function App() {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    useEffect(() => {
        console.log("User:", user);
    }, [user]);

    return (
        <>
            <Switch>
                <ProtectedRoute exact path="/">
                    <HomePage />
                </ProtectedRoute>
                <ProtectedRoute exact path="/login">
                    <LoginPage />
                </ProtectedRoute>
                <ProtectedRoute exact path="/register">
                    <RegisterPage />
                </ProtectedRoute>
            </Switch>
        </>
    );
}

export default App;
