import { configureStore } from "@reduxjs/toolkit";
import PageReducer from "./reactComponents/bottomnavbar/PageSlicer";

export const Storage = configureStore({
  reducer: {
    pagecounter: PageReducer,
  },
});
