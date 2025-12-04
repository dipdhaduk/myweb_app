import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from '../cart';
import wishReducer from '../wishlist';

const store =configureStore({
    reducer:
    {

          Cart: cartReducer,
          Wishlist:wishReducer
    }
})
export default store;