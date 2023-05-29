import { configureStore } from "@reduxjs/toolkit";
import watchReducer from "../watch/watch";

export const store = configureStore({
  reducer: {
    watch: watchReducer,
  },
});
