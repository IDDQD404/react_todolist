import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  status: "idle",
};

export const PageSlicer = createSlice({
  name: "pagecounter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    setAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setAmount } = PageSlicer.actions;

export const selectCount = (state) => state.pagecounter.value;

export default PageSlicer.reducer;
