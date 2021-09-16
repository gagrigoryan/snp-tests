import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useDispatch } from "react-redux";
import { getCurrentUserSuccess } from "./models/user/slice";
import AdminProtectedRoute from "./utils/AdminProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import TestPage from "./pages/TestPage";
import PassingPage from "./pages/PassingPage";
import { TUser } from "./types/user";
import { fetchCurrentUser } from "./api/auth";

function App() {
    const [userChecked, setUserChecked] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user: TUser = await fetchCurrentUser();
                dispatch(getCurrentUserSuccess(user));
            } catch (error) {
                console.error(error);
            } finally {
                setUserChecked(true);
            }
        };
        fetchUser();
    }, [dispatch]);

    return (
        <>
            {userChecked && (
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
                    <ProtectedRoute exact path="/passing/:id">
                        <PassingPage />
                    </ProtectedRoute>
                    <AdminProtectedRoute exact path="/test/:id">
                        <TestPage />
                    </AdminProtectedRoute>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
