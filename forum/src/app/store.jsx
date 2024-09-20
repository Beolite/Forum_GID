import authReducer from "../features/authSlice";
import { configureStore} from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from 'redux-persist'

// const rootReducer = combineReducers({
//   authRed: authSlice
// });

// const persistConfig = {
//   key: "root",
//   storage, // browser local storage by default value
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer
//   },
// });

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});