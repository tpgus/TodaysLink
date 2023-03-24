import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  token: string | null;
  id: string | null;
  userId: string | null;
  email: string | null;
}

const initialState: UserInfo = {
  token: null,
  id: null,
  userId: null,
  email: null,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state = action.payload;
    },

    resetUser: (state) => {
      state.token = null;
      state.id = null;
      state.userId = null;
      state.email = null;
    },
  },
});

export const { setUser, resetUser } = UserSlice.actions;
export default UserSlice.reducer;
