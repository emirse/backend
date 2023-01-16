import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = "http://localhost:8000";
<<<<<<< HEAD
export const userProfile = createAsyncThunk("user/profile", async () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${backendUrl}/api/user/profile/${userInfo.id}`,
      config
    );
    console.log("profile", data);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});
=======

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
>>>>>>> df0ee14 (fix)
