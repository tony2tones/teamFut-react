import { configureStore } from "@reduxjs/toolkit";
import playerProfileReducer from "../reducer/playerProfileReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    playerProfile: playerProfileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
