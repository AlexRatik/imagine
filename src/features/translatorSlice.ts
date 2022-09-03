import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TranslatorType = "ENG" | "RUS";

export interface ITranslatorState {
  language: TranslatorType;
}

const initialState: ITranslatorState = {
  language: "ENG",
};

export const translatorSlice = createSlice({
  name: "translator",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<TranslatorType>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = translatorSlice.actions;

export default translatorSlice.reducer;
