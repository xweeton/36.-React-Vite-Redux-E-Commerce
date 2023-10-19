import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state[itemIndex].amount += 1;
      } else {
        const newProduct = { ...action.payload, amount: 1 };
        console.log(newProduct);
        state.push(newProduct);
      }
    },

    deleteFromCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      state.splice(itemIndex, 1);
    },

    addFromCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      state[itemIndex].amount += 1;
    },

    deductFromCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state[itemIndex].amount > 1) {
        state[itemIndex].amount -= 1;
      } else {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, deleteFromCart, addFromCart, deductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
