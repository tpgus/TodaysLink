import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SearchOptionType } from "../types/commonType";

const initialState: SearchOptionType = {
  searchValue: "",
  tags: "전부 보기",
  flatform: "",
  numOfWinner: "",
};

export const searchOptionSlice = createSlice({
  name: "searchOption",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.searchValue = action.payload;
    },

    resetKeyword: (state, action) => {
      state.searchValue = action.payload;
    },

    setTag: (state, action) => {
      state.tags = action.payload;
    },

    setFlatform: (state, action) => {
      state.flatform = action.payload;
    },

    setNumOfWinner: (state, action) => {
      state.numOfWinner = action.payload;
    },

    resetFilter: (state) => {
      state.flatform = "";
      state.numOfWinner = "";
    },
  },
});

export const {
  setFlatform,
  setNumOfWinner,
  setTag,
  resetFilter,
  setKeyword,
  resetKeyword,
} = searchOptionSlice.actions;
export default searchOptionSlice.reducer;
