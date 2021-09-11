import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../models/user/selectors";

const ProtectedRoute: React.FC<RouteProps> = ({ path, ...props }) => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const pathString = path as string;
    const isAuthRoute = ["/login", "/register"].includes(pathString);

    if (isAuthenticated && isAuthRoute) {
        return <Redirect from={pathString} to="/" {...props} />;
    }

    if (!isAuthenticated && !isAuthRoute) {
        return <Redirect from={pathString} to="/login" {...props} />;
    }

    return <Route path={path} {...props} />;
};

export default ProtectedRoute;
