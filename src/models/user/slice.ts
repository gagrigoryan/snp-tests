import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginRequest, RegisterRequest } from "../../types/auth";
import { TUser } from "../../types/user";

interface UserStore {
    user: TUser;
    isAuth: boolean;
    fetching: boolean;
    loginFailed?: string;
    registerFailed?: string;
}

const initialState: UserStore = {
    user: {} as TUser,
    isAuth: false,
    fetching: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action: PayloadAction<LoginRequest>) => {
            state.fetching = true;
            state.loginFailed = undefined;
        },
        userLoginSuccess: (state, { payload }: PayloadAction<TUser>) => {
            state.fetching = false;
            state.user = payload;
            state.isAuth = true;
        },
        userLoginFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.loginFailed = payload;
        },

        userRegister: (state, action: PayloadAction<RegisterRequest>) => {
            state.fetching = true;
            state.registerFailed = undefined;
        },
        userRegisterSuccess: (state, { payload }: PayloadAction<TUser>) => {
            state.fetching = false;
            state.user = payload;
            state.isAuth = true;
        },
        userRegisterFailed: (state, { payload }: PayloadAction<string>) => {
            state.fetching = false;
            state.registerFailed = payload;
        },
    },
});

export const { userLogin, userLoginSuccess, userLoginFailed, userRegister, userRegisterSuccess, userRegisterFailed } =
    userSlice.actions;
export default userSlice.reducer;
