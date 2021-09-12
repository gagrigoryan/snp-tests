import { LoginRequest, RegisterRequest } from "../types/auth";
import { apiRequest } from "./apiRequest";
import { TUser } from "../types/user";

export const postLogin = async (body: LoginRequest): Promise<TUser> =>
    apiRequest({
        path: "signin",
        method: "POST",
        body,
    });

export const postRegister = async (body: RegisterRequest): Promise<TUser> =>
    apiRequest({
        path: "signup",
        method: "POST",
        body,
    });

export const fetchCurrentUser = async (): Promise<TUser> =>
    apiRequest({
        path: "users/current",
        method: "GET",
    });

export const logout = async () =>
    apiRequest({
        path: "logout",
        method: "DELETE",
    });
