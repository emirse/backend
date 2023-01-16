import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../actions/userAction/authActions";
import { userProfile } from "../../actions/userAction/profileAction";
import { userRegister } from "../../actions/userAction/registerAction";

const initialState = {
  loading: false,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : false,
  userToken: null,
  success: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userInfo");
      state.loading = false;
      state.userInfo = false;
      state.userToken = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
