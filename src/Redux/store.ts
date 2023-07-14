import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./UserSlice";


const store = configureStore({
  reducer: {
    users: usersReducer
  }
});



export default store;
export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

