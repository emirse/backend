import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../authInstance";

const backendUrl = "http://localhost:8000";

export const getShopAction = createAsyncThunk("get/shop", async () => {
  try {
    let response = await axiosInstance.get(`${backendUrl}/api/shop/get/`);

    return response.data[0];
  } catch (error) {
    console.log(error);
    if (error.message) {
      return error.message;
    }
  }
});
