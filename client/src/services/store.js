// Why Should We Use Redux?

// Redux helps you manage "global" state - state that is needed across many parts
// of your application.

// Redux is a pattern and library for managing and updating application state,
// using events called "actions"

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
