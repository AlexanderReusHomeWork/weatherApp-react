import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  errMsg: "Lol Error",
};
const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  setMessage(state, action) {
    state.errMsg = action.payload;
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
