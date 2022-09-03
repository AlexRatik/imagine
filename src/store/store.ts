import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import translatorReducer from "../features/translatorSlice";

export const store = configureStore({
    reducer: {
        translator: translatorReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
