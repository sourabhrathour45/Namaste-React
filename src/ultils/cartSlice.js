import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.quantity++;
      } else {
        // If the item does not exist in the cart, add it to the cart
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const removedItem = action.payload;
      let indexOfRemovedItem = -1;
      state.items.map((item, index) => {
        if (item.card.info.id === removedItem.card.info.id) {
          item.quantity--;
          indexOfRemovedItem = index;
        }

        if (item.quantity === 0) {
          state.items.splice(indexOfRemovedItem, 1);
        }
      });
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
    totalPrice : (state,action)=>{
  
     let price = 0;
     state.items.map((item)=>{
       price = item.card.info.price*item.quantity
     })
     console.log(price)
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
