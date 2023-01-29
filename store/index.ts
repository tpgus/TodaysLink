import { configureStore } from "@reduxjs/toolkit";
import notifiactionReducer from "./notificationSlice";
import searchReducer from "./searchSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    notification: notifiactionReducer,
    search: searchReducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
