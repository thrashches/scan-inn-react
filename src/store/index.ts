import storage from "redux-persist/lib/storage";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth";
import {persistReducer} from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: authSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistReducer(persistConfig, rootReducer);
export default store;
export type RootState = ReturnType<typeof store.getState>;
