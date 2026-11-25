import {createSlice} from '@reduxjs/toolkit';
const initialState={items:JSON.parse(localStorage.getItem('shopease_wishlist')||'[]')};
const slice=createSlice({name:'wishlist',initialState,reducers:{toggleWishlist(state,action){const exists=state.items.some(p=>p.id===action.payload.id);state.items=exists?state.items.filter(p=>p.id!==action.payload.id):[...state.items,action.payload];localStorage.setItem('shopease_wishlist',JSON.stringify(state.items));}}});
export const {toggleWishlist}=slice.actions;export default slice.reducer;
