import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer, // Assuming 'userReducer' manages the 'user' state slice
    // Add more reducers if needed
  },
});

export default store;
