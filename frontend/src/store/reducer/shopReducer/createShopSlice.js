import { createSlice } from "@reduxjs/toolkit";
import { createShopAction } from "../../actions/shopAction/createShopAction";

const initialState = {
  loading: false,
  success: false,
  error: false,
};

const createShopSlice = createSlice({
  name: "createShop",
  initialState,
  reducers: {},
  extraReducers: {
    [createShopAction.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createShopAction.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [createShopAction.rejected]: (state) => {
      state.loading = false;
      state.error =
        "Birden Fazla Markete Sahip Olamazsınız/ya da Market Kullanılmakta";
    },
  },
});

export default createShopSlice.reducer;
