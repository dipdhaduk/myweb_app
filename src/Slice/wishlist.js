import { createSlice } from "@reduxjs/toolkit";

// wishlist ka initial state - yaha wishlist items store honge
const initialState = {
    wishlistitem : []
}

const wishlistslice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
            
        // wishlist me item add karne ke liye
        addtowishlist(state,action){
            const newitem = action.payload; // component se aaya data yaha aayega
            const existingitem= state.wishlistitem.find(item => item.id === newitem.id); // pehle se item hai ya nahi check karega

            if (existingitem) {
                // agar item pehle se hai to kuch nahi karega (wishlist me duplicate nahi hoga)
            } else {
                state.wishlistitem.push(newitem); // agar item nahi hai to naya item add karega
            }
        },
        
        // wishlist se item remove karne ke liye
        removewishlistitem(state,action){
            // jo id aayegi us item ko filter karke remove kar dega
            state.wishlistitem = state.wishlistitem.filter(i=>i.id !== action.payload)

        },
        
        // puri wishlist clear karne ke liye
        clearwishlist(state,action){
            state.wishlistitem = []; // wishlist ko empty kar dega
        },
    }
})

export const{addtowishlist,removewishlistitem,clearwishlist}=wishlistslice.actions
export default wishlistslice.reducer;