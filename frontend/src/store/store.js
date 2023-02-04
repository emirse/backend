import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducer/categoryReducer/categorySlice";
import createShopSlice from "./reducer/shopReducer/createShopSlice";
import getShopSlice from "./reducer/shopReducer/getShopSlice";
import authSlice from "./reducer/userReducer/authSlice";
import profileSlice from "./reducer/userReducer/profileSlice";
import registerSlice from "./reducer/userReducer/registerSlice";
import userUpdateSlice from "./reducer/userReducer/userUpdateSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    register: registerSlice,
    profile: profileSlice,
    category: categorySlice,
    updateProfile: userUpdateSlice,
    createShop: createShopSlice,
    getShop: getShopSlice,
  },
});

export default store;
