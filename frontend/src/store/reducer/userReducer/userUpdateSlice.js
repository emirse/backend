import { createSlice } from "@reduxjs/toolkit";
import { userUpdateProfile } from "../../actions/userAction/userProfileUpdateAction";

const initialState = {
  loading: false,
  success: false,
  error: false,
};
const userUpdateSlice = createSlice({
  name: "updateProfile",
  initialState,
  reducers: {},
  extraReducers: {
    [userUpdateProfile.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [userUpdateProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = "Güncelleme Başarılı";
    },
    [userUpdateProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default userUpdateSlice.reducer;
