import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitem : []
}

const cartslice = createSlice({ //
    name:"cart",
    initialState,
    reducers:{
        addtocart(state,action){

            const newitem = action.payload;
            const existingitem= state.cartitem.find(newitem.id==newitem.id);

            if (existingitem) {
                existingitem.quantity++; //api
            } else {
                state.cartitem.push(newitem);
            }
            
        },
        removecartitem(state,action){
            state.cartitem = state.cartitem.filter(i=>i.id !== action.payload)
        },
        incrementqty(state,action){
            const item = state.cartitem.find(i=>i.id === action.payload)

            if(item){
                item.quantity++;
            }
        },
        decrementqty(state,action){

            const product = state.cartitem.find(i=>i.id === action.payload)

            if(product){
                product.quantity--;
            } else{
                const product1 = state.cartitem.filter(i=>i.id !== action.payload)
            }  
            
        },
        clearcart(state,action){
            state.cartitem = [];
        },
    }
})
export const{addtocart,removecartitem,incrementqty,decrementqty,clearcart}=cartslice.actions;
export default cartslice.reducer;