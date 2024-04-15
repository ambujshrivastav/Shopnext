import { configureStore } from "@reduxjs/toolkit";
import cartSlice from"./shopnextslicer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'persist-store',
    storage,
    };
    const persistedReducer = persistReducer(persistConfig, cartSlice);
    
var stor= configureStore({
    reducer: {
        store :persistedReducer            
    }                              
});
export default stor;
export const persistor = persistStore(stor);
