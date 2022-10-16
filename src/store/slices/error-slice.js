import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  errMsg: "",
};
const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    setMessage(state, action) {
      state.errMsg = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
