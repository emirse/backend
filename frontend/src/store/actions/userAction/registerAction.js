import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";

const backendUrl = "http://localhost:8000";

export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ first_name, lastname, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendUrl}/api/user/register/`,
        {
          first_name: first_name,
          last_name: lastname,
          email: email,
          username: email,
          password: password,
        },
        config
      );

      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
