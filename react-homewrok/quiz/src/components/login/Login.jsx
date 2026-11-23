import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessages, login, register } from "../../features/auth/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const { error, message } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (message) {
            setIsRegister(false);
        }
    }, [message]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (isRegister) {
            dispatch(register({ email, password }));
        } else {
            dispatch(login({ email, password }));
        }
    };

    const toggleHandler = () => {
        dispatch(clearMessages());
        setIsRegister(!isRegister);
    };

    return (
        <form className="login" onSubmit={submitHandler}>
            <h1>{isRegister ? "Register" : "Login"}</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <h4 style={{ color: "red" }}>{error}</h4>}
            {message && <h4 style={{ color: "green" }}>{message}</h4>}
            <button type="submit">{isRegister ? "Register" : "Login"}</button>
            <button type="button" onClick={toggleHandler}>
                {isRegister ? "Go to Login" : "Go to Register"}
            </button>
        </form>
    );
};

export default Login;