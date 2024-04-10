import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTAPI } from "../../apis/post.api";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const response = await POSTAPI.getPosts();
  return response.data;
});
