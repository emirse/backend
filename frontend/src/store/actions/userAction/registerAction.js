import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
<<<<<<< HEAD
=======
import { userLogin } from "./authActions";
>>>>>>> df0ee14 (fix)

const backendUrl = "http://localhost:8000";

export const userRegister = createAsyncThunk(
  "auth/register",
<<<<<<< HEAD
  async ({ name, lastname, email, password }, { rejectWithValue }) => {
=======
  async ({ first_name, lastname, email, password }, { rejectWithValue }) => {
>>>>>>> df0ee14 (fix)
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendUrl}/api/user/register/`,
        {
<<<<<<< HEAD
          first_name: name,
          last_name: lastname,
          email: email,
=======
          first_name: first_name,
          last_name: lastname,
          email: email,
          username: email,
>>>>>>> df0ee14 (fix)
          password: password,
        },
        config
      );
<<<<<<< HEAD
      localStorage.setItem("userInfo", JSON.stringify(data));

      return data;
    } catch (error) {
=======

      return data;
    } catch (error) {
      console.log(error);
>>>>>>> df0ee14 (fix)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
