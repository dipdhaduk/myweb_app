import { createSlice } from "@reduxjs/toolkit";

// cart ka initial state - yaha cart items store honge
const initialState = {
    cartitem : []
}

const cartslice = createSlice({ 
    name:"cart",
    initialState,
    reducers:{
        // cart me item add karne ke liye
        addtocart(state,action){
            const newitem = action.payload; // component se aaya data yaha aayega
            const existingitem = state.cartitem.find(item => item.id === newitem.id); // pehle se item hai ya nahi check karega

            if (existingitem) {
                // agar item pehle se hai to quantity badhayega
                existingitem.quantity = (existingitem.quantity || 1) + 1;
            } else {
                // agar item nahi hai to naya item add karega quantity 1 ke saath
                state.cartitem.push({...newitem, quantity: 1});
            }
        },
        
        // cart se item remove karne ke liye
        removecartitem(state,action){
            // jo id aayegi us item ko filter karke remove kar dega
            state.cartitem = state.cartitem.filter(i=>i.id !== action.payload)
        },
        
        // item ki quantity badhane ke liye
        incrementqty(state,action){
            const item = state.cartitem.find(i=>i.id === action.payload) // id se item find karega

            if(item){
                item.quantity++; // quantity badhayega
            }
        },
        
        // item ki quantity kam karne ke liye
        decrementqty(state,action){
            const product = state.cartitem.find(i=>i.id === action.payload) // id se item find karega

            if(product && product.quantity > 1){
                // agar quantity 1 se zyada hai to kam karega
                product.quantity--;
            } else if(product && product.quantity === 1){
                // agar quantity 1 hai to item ko cart se remove kar dega
                state.cartitem = state.cartitem.filter(i=>i.id !== action.payload)
            }
        },
        
        // puri cart clear karne ke liye
        clearcart(state,action){
            state.cartitem = []; // cart ko empty kar dega
        },
    }
})
export const{addtocart,removecartitem,incrementqty,decrementqty,clearcart}=cartslice.actions;
export default cartslice.reducer;