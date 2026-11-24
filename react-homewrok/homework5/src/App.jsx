import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UniversitiesList from "./pages/UniversitiesList";
import UniversityDetail from "./pages/UniversityDetail";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <Link to="/" className="brand">
          Universities App
        </Link>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities/:country" element={<UniversitiesList />} />
          <Route
            path="/university/:country/:index"
            element={<UniversityDetail />}
          />
          <Route
            path="*"
            element={
              <div className="page-container">
                <h2>Page Not Found</h2>
                <Link to="/">Return to Home</Link>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;