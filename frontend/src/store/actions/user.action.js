import { createAsyncThunk } from "@reduxjs/toolkit";
import { USERAPI } from "../../apis/user.api";

export const login = createAsyncThunk("user/login", async (data) => {
  const response = await USERAPI.login(data);
  return response.data;
});

export const signup = createAsyncThunk("user/signup", async (data) => {
  const response = await USERAPI.signup(data);
  return response.data;
});

export const getUser = createAsyncThunk("user/getUser", async (id) => {
  const response = await USERAPI.getUser(id);
  return response.data;
});
