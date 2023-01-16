import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = "http://localhost:8000";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${backendUrl}/api/user/login/`,
        { username: email, password: password },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
<<<<<<< HEAD
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
=======
      if (error.response && error.response.data["detail"]) {
        return rejectWithValue(error.response.data["detail"]);
>>>>>>> df0ee14 (fix)
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
