import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

/*
export const userLogin = createAsyncThunk(
  "auth/login",
  async (e, { rejectWithValue }) => {
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
      if (error.response && error.response.data["detail"]) {
        return rejectWithValue(error.response.data["detail"]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("product_id", id);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        `/api/products/upload/`,
        formData,
        config
      );
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  <Form.Group controlId="image">
        <Form.Label>Market Resmi</Form.Label>
        <Form.Control
          name="file"
          type="file"
          multiple
          accept="image/*"
          required
          placeholder="Şifre"
          onChange={uploadImage}
        />
      </Form.Group>*/
