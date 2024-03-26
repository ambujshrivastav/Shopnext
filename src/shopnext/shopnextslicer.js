 import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    cartItems: [],
    cartCount : 0
}
 
const cartSlice  = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
             state.cartItems.push(action.payload);
             state.cartCount = state.cartItems.length;
        },
        emptyCart(state){
            state.cartItems=[];
            state.cartCount=0;
        },
        deleteproduct(state,action){
            state.cartItems.splice(action.payload,1);
            state.cartCount=state.cartItems.length;
        }
    }
});
export const { addToCart,emptyCart,deleteproduct } = cartSlice.actions;
export default cartSlice.reducer;
