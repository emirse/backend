import { createSlice } from "@reduxjs/toolkit";
import { userRegister } from "../../actions/userAction/registerAction";
import authSlice from "./authSlice";

const initialState = {
  loading: false,
  success: false,
  error: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = "Email Kullanılmakta";
    },
  },
});

export default registerSlice.reducer;
