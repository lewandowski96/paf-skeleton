import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/post.slice";
import userReducer from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
