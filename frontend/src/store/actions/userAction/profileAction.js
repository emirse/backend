import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../authInstance";

export const userProfile = createAsyncThunk("user/profile", async () => {
  /*userInfo*/
  try {
    let response = await axiosInstance.get("api/user/profile/");

    return response.data;
  } catch (error) {
    if (error.message) {
      localStorage.clear();
      return error.message;
    }
  }
});
