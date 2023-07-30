import { createSlice } from "@reduxjs/toolkit";

const initalState: {
  items: {
    id: string;
    price: number;
    quantity: number;
    totalPrice: number;
    name: string;
    imageSrc: string;
  }[];
  totalQuantity: number;
  totalPrice: number;
} = { items: [], totalQuantity: 0, totalPrice: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addToCart(state, action) {
      const newItem: {
        id: string;
        price: number;
        quantity: number;
        name: string;
        imageSrc: string;
      } = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          quantity: newItem.quantity,
          totalPrice: newItem.quantity * newItem.price,
          imageSrc: newItem.imageSrc,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.quantity * newItem.price;
      }
      state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      state.totalQuantity = state.totalQuantity + newItem.quantity;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
      state.totalPrice = state.totalPrice - existingItem!.price;
      state.totalQuantity = state.totalQuantity - 1;
    },
    removeAllItems(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalPrice = state.totalPrice - existingItem!.totalPrice;
      state.totalQuantity = state.totalQuantity - existingItem!.quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
