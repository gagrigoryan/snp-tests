export type LoginRequest = {
    username: string;
    password: string;
};

export type RegisterRequest = LoginRequest & {
    password_confirmation: string;
    is_admin: boolean;
};
