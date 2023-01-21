import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  isActive: boolean;
  isPositive: boolean;
  message: string;
}

const initialState: NotificationState = {
  isActive: false,
  isPositive: true,
  message: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{ isPositive: boolean; message: string }>
    ) => {
      state.isActive = true;
      state.isPositive = action.payload.isPositive;
      state.message = action.payload.message;
    },

    hideNotification: (state) => {
      state.isActive = false;
      state.isPositive = true;
      state.message = "";
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
