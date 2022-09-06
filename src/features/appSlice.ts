import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TranslatorType = "ENG" | "RUS";
export type CategoryType =
  | "Sculpture"
  | "Architecture"
  | "Landscape"
  | "Graphic arts"
  | "Portrait";

export interface ITranslatorState {
  language: TranslatorType;
  category: CategoryType;
}

const initialState: ITranslatorState = {
  language: "ENG",
  category: "Sculpture",
};

export const appSlice = createSlice({
  name: "translator",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<TranslatorType>) => {
      state.language = action.payload;
    },
    setCategory: (state, action: PayloadAction<CategoryType>) => {
      state.category = action.payload;
    },
  },
});

export const { setLanguage, setCategory } = appSlice.actions;

export default appSlice.reducer;
