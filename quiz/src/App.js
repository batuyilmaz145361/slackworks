import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/login/Login";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import { logout } from "./features/auth/auth";
import { clearCart } from "./features/cart/cart";
import { setPage } from "./features/products/products";

function App() {
    const currentUser = useSelector((store) => store.auth.currentUser);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        dispatch(clearCart());
        dispatch(setPage(1));
    };

    if (!currentUser) {
        return (
            <div className="App">
                <Login />
            </div>
        );
    }

    return (
        <div className="App">
            <h3>{currentUser}</h3>
            <button onClick={logoutHandler}>Logout</button>
            <div className="content">
                <Products />
                <Cart />
            </div>
        </div>
    );
}

export default App;