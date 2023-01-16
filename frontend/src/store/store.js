import { configureStore } from "@reduxjs/toolkit";
import { userUpdateProfile } from "./actions/userAction/userProfileUpdateAction";
import categorySlice from "./reducer/categoryReducer/categorySlice";

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
  },
});

export default store;
