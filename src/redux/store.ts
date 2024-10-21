import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import registerReducer from "./reducers/auth/registerSlice";
import verifyAccountReducer from "./reducers/auth/verifySlice";
import businessInfoReducer from "./reducers/auth/businessInfoSlice";
import loginReducer from "./reducers/auth/loginSlice";
import resetLinkSlice from "./reducers/auth/resetSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    register: registerReducer,
    verifyAccount: verifyAccountReducer,
    businessInfo: businessInfoReducer,
    login: loginReducer,
    resetLink: resetLinkSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
