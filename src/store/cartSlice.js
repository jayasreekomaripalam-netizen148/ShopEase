import { createSlice } from '@reduxjs/toolkit';
const initialState = { items: JSON.parse(localStorage.getItem('shopease_cart') || '[]') };
const cartSlice = createSlice({name:'cart',initialState,reducers:{
 addToCart(state,action){const item=state.items.find(x=>x.id===action.payload.id); if(item)item.quantity+=1; else state.items.push({...action.payload,quantity:1}); localStorage.setItem('shopease_cart',JSON.stringify(state.items));},
 removeFromCart(state,action){state.items=state.items.filter(x=>x.id!==action.payload);localStorage.setItem('shopease_cart',JSON.stringify(state.items));},
 changeQuantity(state,action){const item=state.items.find(x=>x.id===action.payload.id);if(item){item.quantity=Math.max(1,item.quantity+action.payload.delta);}localStorage.setItem('shopease_cart',JSON.stringify(state.items));},
 clearCart(state){state.items=[];localStorage.setItem('shopease_cart','[]');}
}});
export const {addToCart,removeFromCart,changeQuantity,clearCart}=cartSlice.actions; export default cartSlice.reducer;
