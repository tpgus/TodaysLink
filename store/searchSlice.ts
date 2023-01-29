import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
  tag: "전부 보기",
  flatform: "",
  winner: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },

    resetKeyword: (state, action) => {
      state.keyword = action.payload;
    },

    setTag: (state, action) => {
      state.tag = action.payload;
    },

    setFlatform: (state, action) => {
      state.flatform = action.payload;
    },

    setWinner: (state, action) => {
      state.winner = action.payload;
    },

    resetFilter: (state) => {
      state.flatform = "";
      state.winner = "";
    },
  },
});

export const {
  setFlatform,
  setWinner,
  setTag,
  resetFilter,
  setKeyword,
  resetKeyword,
} = searchSlice.actions;
export default searchSlice.reducer;
