import { createSlice } from "@reduxjs/toolkit";
import { userRegister } from "../../actions/userAction/registerAction";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const authSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
