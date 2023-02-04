import { createSlice } from "@reduxjs/toolkit";
import { createShopAction } from "../../actions/shopAction/createShopAction";
import { getShopAction } from "../../actions/shopAction/getShopAction";

const initialState = {
  loading: false,
  success: false,
  error: false,
  shop: "",
};

const getShopSlice = createSlice({
  name: "getShop",
  initialState,
  reducers: {},
  extraReducers: {
    [getShopAction.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getShopAction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.shop = payload;
    },
    [getShopAction.rejected]: (state) => {
      state.loading = false;
      state.error =
        "Birden Fazla Markete Sahip Olamazsınız/ya da Market Kullanılmakta";
    },
  },
});

export default getShopSlice.reducer;
