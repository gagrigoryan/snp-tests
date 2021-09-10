export type SignInRequest = {
    username: string;
    password: string;
};

export type SignUpRequest = SignInRequest & {
    password_confirmation: string;
    is_admin: boolean;
};
