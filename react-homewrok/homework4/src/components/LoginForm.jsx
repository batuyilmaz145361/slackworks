import React, { useState } from "react";

const CORRECT_EMAIL = "digitalAcademy@gmail.com";
const CORRECT_PASSWORD = "iLoveReact123";

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email === CORRECT_EMAIL && password === CORRECT_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLoginSuccess();
    }
  };

  return (
    <form className="login-box" onSubmit={handleSubmit}>
      <h2>შესვლა</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={!isValid}>
        საიტზე გადასვლა
      </button>
    </form>
  );
}

export default LoginForm;