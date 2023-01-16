import { createSlice } from "@reduxjs/toolkit";
import { userProfile } from "../../actions/userAction/profileAction";

const initialState = {
  loading: false,
  userDetails: false,
  success: false,
  error: null,
};
const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [userProfile.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userDetails = payload;
    },
    [userProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default authSlice.reducer;
