import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import registerReducer from "./reducers/auth/registerSlice";
import verifyAccountReducer from "./reducers/auth/verifySlice";
import businessInfoReducer from "./reducers/auth/businessInfoSlice";
import loginReducer from "./reducers/auth/loginSlice";
import resetLinkSlice from "./reducers/auth/resetSlice";
import resetPasswordRequest from "./reducers/auth/passwordResetRequestSlice";
import resetPasswordReducer from "./reducers/auth/resetPasswordSlice";
import getCropsReducer from "./reducers/crops/cropSlice";
import getCategoryReducer from "./reducers/crops/cropCategorySlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    register: registerReducer,
    verifyAccount: verifyAccountReducer,
    businessInfo: businessInfoReducer,
    login: loginReducer,
    resetLink: resetLinkSlice,
    requestPasswordReset: resetPasswordRequest,
    resetPassword: resetPasswordReducer,
    getCrops: getCropsReducer,
    getCropCategory: getCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore the AxiosHeaders type (or any other non-serializable objects you encounter)
        ignoredActions: ["register/rejected"],
        ignoredPaths: ["payload.headers"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
