import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
