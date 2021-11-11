import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../redusers/weatherSlices";

const store = configureStore({
  reducer: weatherReducer,
});

export default store;
