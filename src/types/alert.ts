export enum AlertTypeEnum {
    Success = "success",
    Loading = "loading",
    Error = "error",
}

export type TAlert = {
    type: AlertTypeEnum;
    message: string;
};
