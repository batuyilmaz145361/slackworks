import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../api";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (page) => {
        return await fetchProducts(page);
    }
);

const initialState = {
    loading: false,
    error: "",
    products: [],
    total: 0,
    page: 1,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                state.total = action.payload.total;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setPage } = productsSlice.actions;
export default productsSlice.reducer;