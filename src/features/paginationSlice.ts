import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  currentPage: number;
  maxPage: number;
  minPage: number;
}

const initialState: IInitialState = {
  currentPage: 1,
  maxPage: 74,
  minPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
