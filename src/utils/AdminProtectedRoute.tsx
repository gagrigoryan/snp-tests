import React from "react";
import { Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAdminSelector } from "../models/user/selectors";
import ProtectedRoute from "./ProtectedRoute";

const AdminProtectedRoute: React.FC<RouteProps> = ({ path, ...props }) => {
    const isAdmin = useSelector(isAdminSelector);
    const pathString = path as string;

    if (!isAdmin) {
        return <Redirect from={pathString} to="/" {...props} />;
    }

    return <ProtectedRoute path={path} {...props} />;
};

export default AdminProtectedRoute;
