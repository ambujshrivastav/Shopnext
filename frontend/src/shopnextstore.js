import { configureStore } from "@reduxjs/toolkit";

import cartSlice from"./shopnextslicer";

export default configureStore({
    reducer: {
        store :cartSlice            
    }                              
});
