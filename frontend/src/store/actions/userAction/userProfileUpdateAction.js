import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = "http://localhost:8000";

export const userUpdateProfile = createAsyncThunk(
  "user/update/profile",
  async ([user, token], { rejectWithValue }) => {
    console.log(user);
    console.log(token);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `${backendUrl}/api/user/profile/update`,
        user,
        config
      );

      return data;
    } catch (error) {
      if (error.message && error.response) {
        return rejectWithValue(error.response.data.detail);
      }
    }
  }
);
