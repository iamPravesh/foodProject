import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice'
import cartReducer from "./cart";

const persistConfig = {
    key: "items",
    storage
}

const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
});