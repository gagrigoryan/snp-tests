import { SignInRequest, SignUpRequest } from "../types/auth";
import { apiRequest } from "./apiRequest";

export const postSignIn = async (body: SignInRequest) =>
    apiRequest({
        path: "signin",
        method: "POST",
        body,
    });

export const postSignUp = async (body: SignUpRequest) =>
    apiRequest({
        path: "signup",
        method: "POST",
        body,
    });
