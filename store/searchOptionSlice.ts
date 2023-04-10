import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SearchOptionType, TagType, PlatformType } from "../types";

const initialState: SearchOptionType = {
  tags: "전부 보기",
  platform: null,
  numOfWinner: 0,
};

export const searchOptionSlice = createSlice({
  name: "searchOption",
  initialState,
  reducers: {
    setTag: (state, action: PayloadAction<TagType>) => {
      state.tags = action.payload;
    },

    setPlatforms: (state, action: PayloadAction<PlatformType>) => {
      state.platform = action.payload;
    },

    setNumOfWinner: (state, action: PayloadAction<number>) => {
      state.numOfWinner = action.payload;
    },

    resetNumOfWinner: (state) => {
      state.numOfWinner = 0;
    },

    resetPlatform: (state) => {
      state.platform = null;
    },
  },
});
export const {
  setPlatforms,
  setNumOfWinner,
  setTag,
  resetNumOfWinner,
  resetPlatform,
} = searchOptionSlice.actions;
export default searchOptionSlice.reducer;
