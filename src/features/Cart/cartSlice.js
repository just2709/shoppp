import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set, child } from "firebase/database";
import { database } from "../../firebase";
const dbRef = ref(database);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    showMiniCart(state) {
      
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action) {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
      set(child(dbRef, "cart/" + userId), state.cartItems);
    },
    setQuantity(state, action) {
      const userId = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).id : "";
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
      set(child(dbRef, "cart/" + userId), state.cartItems);
    },
    removeFromCart(state, action) {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      const id = action.payload.id;
      state.cartItems = state.cartItems.filter((x) => x.id != id);
      set(child(dbRef, "cart/" + userId), state.cartItems);
    },
    removeAllCart(state) {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      state.cartItems = [];
      set(child(dbRef, "cart/" + userId), []);
    },
    emptyCart(state) {
      state.cartItems = [];
    },
    renderCartAfterLogin(state) {
      state.cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    },
  },
});
const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, removeFromCart, setQuantity, removeAllCart, emptyCart, renderCartAfterLogin } = actions;
export default reducer;
