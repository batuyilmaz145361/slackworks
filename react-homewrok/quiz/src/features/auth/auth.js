import { createSlice } from "@reduxjs/toolkit";

const defaultUsers = [{ email: "random@gmail.com", password: "random123" }];

const getUsers = () => {
    const saved = JSON.parse(localStorage.getItem("users"));
    return saved ? saved : defaultUsers;
};

const initialState = {
    users: getUsers(),
    currentUser: null,
    error: "",
    message: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find(
                (u) => u.email === email && u.password === password
            );
            if (user) {
                state.currentUser = user.email;
                state.error = "";
                state.message = "";
            } else {
                state.error = "Email or password is incorrect";
            }
        },
        register: (state, action) => {
            const { email, password } = action.payload;
            const exists = state.users.find((u) => u.email === email);
            if (exists) {
                state.error = "This email is already registered";
                return;
            }
            state.users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(state.users));
            state.error = "";
            state.message = "Registered successfully, now log in";
        },
        logout: (state) => {
            state.currentUser = null;
        },
        clearMessages: (state) => {
            state.error = "";
            state.message = "";
        },
    },
});

export const { login, register, logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;