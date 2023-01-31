import { createSlice } from "@reduxjs/toolkit";
import type { SearchOptionType } from "../types/commonType";

const initialState: SearchOptionType = {
  searchValue: "",
  tags: "전부 보기",
  platforms: [],
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

    setPlatforms: (state, action) => {
      state.platforms = action.payload;
    },

    setNumOfWinner: (state, action) => {
      state.numOfWinner = action.payload;
    },

    resetFilter: (state) => {
      state.platforms = [];
      state.numOfWinner = "";
    },
  },
});

export const {
  setPlatforms,
  setNumOfWinner,
  setTag,
  resetFilter,
  setKeyword,
  resetKeyword,
} = searchOptionSlice.actions;
export default searchOptionSlice.reducer;
