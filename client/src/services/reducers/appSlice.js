import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   home: true,
  //   class: false,
  //   functional: false,
};

export const appStateSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // setHome: (state) => {
    //   state.class = false;
    //   state.functional = false;
    //   state.home = true;
    // },
    // setClass: (state) => {
    //   state.home = false;
    //   state.class = true;
    // },
    // setFunctional: (state) => {
    //   state.home = false;
    //   state.functional = true;
    // },
  },
});

export const {
  // setHome,
  // setClass,
  // setFunctional
} = appStateSlice.actions;

export default appStateSlice.reducer;
