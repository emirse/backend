import { createSlice } from "@reduxjs/toolkit";
import { productAction } from "../../actions/productAction/productAction";

const initialState = {
  loading: false,
  categories: false,
  success: false,
  error: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [productAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [productAction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.categories = payload;
    },
    [productAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
  },
});
export default productSlice.reducer;
