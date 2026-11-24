import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = country.trim();
    if (!trimmed) return;
    navigate(`/universities/${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="page-container">
      <h1>Universities Page</h1>
      <p className="subtitle">
        This is the Universities page where you can find information about the
        university you are interested in. Enter a country name below to view its
        universities.
      </p>

      <form onSubmit={handleSubmit} className="search-form">
        <label htmlFor="country-input">Country Name</label>
        <input
          id="country-input"
          type="text"
          placeholder="e.g. Georgia"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit" disabled={!country.trim()}>
          Search Universities
        </button>
      </form>
    </div>
  );
};

export default Home;