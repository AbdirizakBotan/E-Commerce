import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice ({
    name : "Cart",
    initialState : {
     cartItems : [],
     totalPrice : 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
      removeItemFromCart: (state, action) => {
        const itemID = action.payload
          state.cartItems =  state.cartItems.filter((item) => item.id != itemID.id)
        },
        calculateTotalPrice : (state) =>{
          let total = 0;
          state.cartItems.forEach((item)=>{
            total += item.price
          })
          state.totalPrice = total
        }
    }
})
export const {addToCart,removeItemFromCart,calculateTotalPrice} = cart.actions
export default cart.reducer