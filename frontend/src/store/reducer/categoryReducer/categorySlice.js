import { createSlice } from "@reduxjs/toolkit";
import { categoryAction } from "../../actions/categoryAction/categoryAction";

const initialState = {
  loading: false,
  categories: false,
  success: false,
  error: null,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [categoryAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [categoryAction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.categories = payload;
    },
    [categoryAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
  },
});
export default categorySlice.reducer;
