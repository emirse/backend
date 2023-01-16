import { createSlice } from "@reduxjs/toolkit";
import { userProfile } from "../../actions/userAction/profileAction";

const initialState = {
  loading: false,
  userDetails: false,
  success: false,
  error: false,
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [userProfile.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [userProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userDetails = payload;
    },
    [userProfile.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default profileSlice.reducer;
