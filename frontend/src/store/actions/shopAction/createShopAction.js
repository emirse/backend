import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../authInstance";

const backendUrl = "http://localhost:8000";

export const createShopAction = createAsyncThunk(
  "create/shop",
  async (shop, { rejectWithValue }) => {
    //const formData = new FormData();
    //formData.append("image", file);

    try {
      let response = await axiosInstance.post(
        `${backendUrl}/api/shop/create/`,
        shop
      );
      return response.data;
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
