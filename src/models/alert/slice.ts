import { AlertTypeEnum, TAlert } from "../../types/alert";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertStore {
    alert: TAlert | null;
}

const initialState: AlertStore = {
    alert: null,
};

const isFetchingAction = (action: AnyAction) => {
    return action.type.endsWith("Request");
};

const isSuccessAction = (action: AnyAction) => {
    return action.type.endsWith("Success");
};

const isFailedAction = (action: AnyAction) => {
    return action.type.endsWith("Failed");
};

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        setAlert: (state, { payload }: PayloadAction<TAlert | null>) => {
            state.alert = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isSuccessAction, (state) => {
                state.alert = {
                    type: AlertTypeEnum.Success,
                    message: "Успешно",
                };
            })
            .addMatcher(isFetchingAction, (state) => {
                state.alert = {
                    type: AlertTypeEnum.Loading,
                    message: "Загрузка...",
                };
            })
            .addMatcher(isFailedAction, (state, { payload }: PayloadAction<string>) => {
                state.alert = {
                    type: AlertTypeEnum.Error,
                    message: payload,
                };
            });
    },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
