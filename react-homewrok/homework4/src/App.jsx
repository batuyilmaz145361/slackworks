import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import UserFilters from "./components/UserFilters";
import UserCard from "./components/UserCard";
import "./style.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    name: true,
    email: true,
    country: false,
    phone: false,
  });

  const fetchInitialUsers = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=5");
      setUsers(res.data.results);
    } catch (err) {
      console.error("Failed to fetch initial users:", err);
    }
  };

  const handleAddUser = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=1");
      setUsers((prev) => [...prev, ...res.data.results]);
    } catch (err) {
      console.error("Failed to fetch new user:", err);
    }
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  useEffect(() => {
    fetchInitialUsers();
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <h2>Users ({users.length})</h2>

      <UserFilters filters={filters} onChange={handleFilterChange} />

      <div className="users-list">
        {users.map((user) => (
          <UserCard key={user.login.uuid} user={user} filters={filters} />
        ))}
      </div>

      <button className="add-btn" type="button" onClick={handleAddUser}>
        Add User (+1)
      </button>
    </div>
  );
}

export default App;