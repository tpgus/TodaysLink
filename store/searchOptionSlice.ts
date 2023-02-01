import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SearchOptionType } from "../types";

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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    resetSearchValue: (state, action) => {
      state.searchValue = "";
    },

    setTag: (state, action: PayloadAction<string>) => {
      state.tags = action.payload;
    },

    setPlatforms: (state, action: PayloadAction<string[]>) => {
      state.platforms = action.payload;
    },

    setNumOfWinner: (state, action: PayloadAction<string>) => {
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
  setSearchValue,
  resetSearchValue,
} = searchOptionSlice.actions;
export default searchOptionSlice.reducer;
