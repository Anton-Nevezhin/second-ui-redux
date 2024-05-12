import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alert: {
    theme: "success" || "danger",
    title: "",
    message: "",
    isVisible: false
    }
  }
  
export const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        changeAlert: (state, action) => {
            state.alert = action.payload
      },
    },
  });
  
  export const { changeAlert } = alertSlice.actions;

  export default alertSlice.reducer;
  