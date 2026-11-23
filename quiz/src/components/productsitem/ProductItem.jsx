import React, { memo } from "react";

const ProductItem = ({ product, onAdd }) => {
    return (
        <div className="product">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => onAdd(product)}>Add to cart</button>
        </div>
    );
};

export default memo(ProductItem);