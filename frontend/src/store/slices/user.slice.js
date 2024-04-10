import { createSlice } from "@reduxjs/toolkit";
import { getUser, login, signup } from "../actions/user.action";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    user: null,
    users: [],
    isLogin: false,
  },
  reducers: {
    logout: (state) => {
      window.location.href = "/login";
      sessionStorage.clear();
      state.userId = null;
      state.user = null;
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.userId = action.payload.userId;
      state.isLogin = true;
      sessionStorage.setItem("userId", action.payload.userId);
      sessionStorage.setItem("Authorization", action.payload.accessToken);
      window.location.href = "/";
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.userId = action.payload.userId;
      state.isLogin = true;
      sessionStorage.setItem("userId", action.payload.userId);
      sessionStorage.setItem("Authorization", action.payload.accessToken);
      window.location.href = "/";
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userId = action.payload.id;
      state.user = action.payload;
      state.isLogin = true;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
