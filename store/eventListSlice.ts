import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { EventListType } from "../types";

const INITIAL_OPTIONS: Partial<{ [key: string]: string | string[] }> = {
  tags: "",
  platforms: [],
  numOfWinner: "",
  searchValue: "",
};

const INITIAL_EVENTLIST: EventListType = [];

const initialState = {
  eventList: INITIAL_EVENTLIST,
  filterOptions: INITIAL_OPTIONS,
  pageOffset: 0,
};

export const eventListSlice = createSlice({
  name: "eventList",
  initialState,
  reducers: {
    setEventList: (state, action: PayloadAction<EventListType>) => {
      state.eventList = state.eventList.concat(action.payload);
    },

    setPageOffset: (state, action: PayloadAction<number>) => {
      state.pageOffset += action.payload;
    },

    setFilterOptions: (
      state,
      action: PayloadAction<{ key: string; option: string | string[] }>
    ) => {
      state.filterOptions[action.payload.key] = action.payload.option;
      state.pageOffset = 0;
    },

    resetFilterOptions: (state) => {
      state.filterOptions = INITIAL_OPTIONS;
      state.pageOffset = 0;
    },
  },
});

export const { setFilterOptions, resetFilterOptions } = eventListSlice.actions;
export default eventListSlice.reducer;
