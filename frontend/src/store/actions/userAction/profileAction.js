import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = "http://localhost:8000";

export const userProfile = createAsyncThunk(
  "user/profile",
  async (userInfo) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${userInfo}`,
        },
      };
      const { data } = await axios.get(
        `${backendUrl}/api/user/profile/`,
        config
      );
      return data;
    } catch (error) {
      if (error.message) {
        return error.message;
      }
    }
  }
);
