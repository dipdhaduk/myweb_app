import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistitem : []
}

const wishlistslice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
            
        addtowishlist(state,action){
            const newitem = action.payload;
            const existingitem= state.wishlistitem.find(newitem.id==newitem.id);

            if (existingitem) {
                existingitem.quantity++; //api
            } else {
                state.wishlistitem.push(newitem);
            }
        },
        removewishlistitem(state,action){
            state.wishlistitem = state.wishlistitem.filter(i=>i.id !== action.payload)

        },
        clearwishlist(state,action){
            state.wishlistitem = [];
        },
    }
})

export const{addtowishlist,removewishlistitem,clearwishlist}=wishlistslice.actions
export default wishlistslice.reducer;