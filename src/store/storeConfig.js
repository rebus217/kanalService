import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk";
import userSlice from "./slices/user.slice";


const reducers = combineReducers({
    user: userSlice,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export const persistor = persistStore(store);