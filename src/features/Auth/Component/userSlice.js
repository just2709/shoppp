import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { child, get, getDatabase, ref } from "firebase/database";
import userApi from "../../../api/userApi";

export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  var cart = [];
  const data = await userApi.login(payload);
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  const dbRef = ref(getDatabase());

  get(child(dbRef, `cart/${data.user.id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        cart = snapshot.val();
      } else {
        console.log("No data available");
        cart = [];
      }
    })
    .catch((error) => {
      console.error(error);
    });
  setTimeout(function () {
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, 1000);

  return data.user;
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    open: false,
    current: JSON.parse(localStorage.getItem("user")) || {},
  },
  reducers: {
    openForm(state) {
      state.open = true;
    },
    closeForm(state) {
      state.open = false;
    },
    logout(state) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(register.fulfilled, (state, action) => {
      // Add user to the state array
      state.current = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});
const { actions, reducer } = userSlice;
export const { logout, closeForm, openForm } = actions;
export default reducer;
