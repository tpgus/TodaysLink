import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SearchOptionType, TAG, PLATFORM } from "../types";

const initialState: SearchOptionType = {
  searchValue: null,
  tags: "전부 보기",
  platform: null,
  numOfWinner: 0,
};

export const searchOptionSlice = createSlice({
  name: "searchOption",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    resetSearchValue: (state) => {
      state.searchValue = null;
    },

    setTag: (state, action: PayloadAction<TAG>) => {
      state.tags = action.payload;
    },

    setPlatforms: (state, action: PayloadAction<PLATFORM>) => {
      state.platform = action.payload;
    },

    setNumOfWinner: (state, action: PayloadAction<number>) => {
      state.numOfWinner = action.payload;
    },

    resetFilter: (state) => {
      state.platform = null;
      state.numOfWinner = 0;
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
