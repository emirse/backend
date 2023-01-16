import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import authSlice from "../store/reducer/authReducer/authSlice";
import profileSlice from "./reducer/authReducer/profileSlice";
import registerSlice from "./reducer/authReducer/registerSlice";
import categorySlice from "./reducer/categoryReducer/categorySlice";

=======
import { userUpdateProfile } from "./actions/userAction/userProfileUpdateAction";
import categorySlice from "./reducer/categoryReducer/categorySlice";

import authSlice from "./reducer/userReducer/authSlice";
import profileSlice from "./reducer/userReducer/profileSlice";
import registerSlice from "./reducer/userReducer/registerSlice";
import userUpdateSlice from "./reducer/userReducer/userUpdateSlice";

>>>>>>> df0ee14 (fix)
const store = configureStore({
  reducer: {
    auth: authSlice,
    register: registerSlice,
    profile: profileSlice,
    category: categorySlice,
<<<<<<< HEAD
=======
    updateProfile: userUpdateSlice,
>>>>>>> df0ee14 (fix)
  },
});

export default store;
