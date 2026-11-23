import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth";
import productsReducer from "./features/products/products";
import cartReducer from "./features/cart/cart";

const store = configureStore({
    reducer: { auth: authReducer, products: productsReducer, cart: cartReducer },
});

export default store;