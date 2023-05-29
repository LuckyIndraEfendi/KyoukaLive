import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: "lucky",
};

const watchSlice = createSlice({
  name: "lucky",
  initialState,
  reducers: {
    changeDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { changeDescription } = watchSlice.actions;
export default watchSlice.reducer;
