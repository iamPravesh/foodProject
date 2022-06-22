import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
    // if the item id is already in the cart, increase the quantity by 1
    // else add the item to the cart
  const item = state.find(item=>item.id === action.payload.id)
  if(item) {
    item.quantity += 1
  }
  else {
    state.push(action.payload)
  }
    },
    clearCart(state) {
      state.length = 0
    },
      // to delete an item from the cart
      deleteItem(state, action) {
        state.splice(action.payload, 1);
      },

      // increase the quantity of an item in the cart by 1 if it is already in the cart 
      increaseQuantity(state,action){
        state = state.map(item=>{
          if(item.id === action.payload){
            item.quantity +=1
          }
          return item
        })
      },

      // decrease the quantity of an item in the cart by 1 if it is already in the cart
      decreaseQuantity(state,action){
        state =  state.map(item=>{
          if(item.id === action.payload){
            item.quantity -=1
          }
          return item
        })}


}})



// exporting the action
export const { addToCart, clearCart,deleteItem , increaseQuantity, decreaseQuantity} = cartSlice.actions;

// exporting the reducer
export default cartSlice.reducer;