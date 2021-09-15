import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./models/user/slice";
import AdminProtectedRoute from "./utils/AdminProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import TestPage from "./pages/TestPage";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

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
                <AdminProtectedRoute exact path="/test/:id">
                    <TestPage />
                </AdminProtectedRoute>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
