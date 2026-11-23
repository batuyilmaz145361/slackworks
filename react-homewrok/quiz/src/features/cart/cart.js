import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existing = state.items.find((item) => item.id === product.id);
            if (existing) {
                existing.qty += 1;
            } else {
                state.items.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1,
                });
            }
        },
        increase: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            item.qty += 1;
        },
        decrease: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            item.qty -= 1;
            if (item.qty === 0) {
                state.items = state.items.filter((i) => i.id !== action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, increase, decrease, removeFromCart, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;