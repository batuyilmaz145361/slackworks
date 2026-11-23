import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";
import { getProducts } from "../../features/products/products";
import { addToCart } from "../../features/cart/cart";
import ProductItem from "./ProductItem";
import Pagination from "../pagination/Pagination";

const Products = () => {
    const { loading, error, products, page } = useSelector(
        (store) => store.products
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(page));
    }, [dispatch, page]);

    const addHandler = useCallback(
        (product) => {
            dispatch(addToCart(product));
        },
        [dispatch]
    );

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PacmanLoader color="#36d7b7" />
            </div>
        );
    }

    return (
        <div>
            <h1>Products</h1>
            {error ? (
                <h1>Error happened</h1>
            ) : (
                <div className="products">
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} onAdd={addHandler} />
                    ))}
                </div>
            )}
            <Pagination />
        </div>
    );
};

export default Products;