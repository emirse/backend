import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../authInstance";

const backendUrl = "http://localhost:8000";

export const userUpdateProfile = createAsyncThunk(
  "user/update/profile",
  async ([user], { rejectWithValue }) => {
    try {
      let response = await axiosInstance.put(
        `${backendUrl}/api/user/profile/update/`,
        user
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.message && error.response) {
        return rejectWithValue(error.response.data.detail);
      }
    }
  }
);
