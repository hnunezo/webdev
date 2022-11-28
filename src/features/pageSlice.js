import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    show: "",
  },
  reducers: {
    setShow: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setShow } = pageSlice.actions;

export default pageSlice.reducer;
