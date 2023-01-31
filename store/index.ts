import notifiactionReducer from "./notificationSlice";
import searchOptionReducer from "./searchOptionSlice";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    notification: notifiactionReducer,
    searchOption: searchOptionReducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
