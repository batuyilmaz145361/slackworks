import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrease,
    increase,
    removeFromCart,
} from "../../features/cart/cart";

const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="cart">
            <h1>Cart</h1>
            {items.length === 0 && <h3>Cart is empty</h3>}
            {items.map((item) => (
                <div key={item.id} className="cart-item">
                    <span>{item.title}</span>
                    <div>
                        <button onClick={() => dispatch(decrease(item.id))}>-</button>
                        <span> {item.qty} </span>
                        <button onClick={() => dispatch(increase(item.id))}>+</button>
                        <span> ${(item.price * item.qty).toFixed(2)} </span>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;