import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const UniversitiesList = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError("");

    const url = `http://universities.hipolabs.com/search?country=${encodeURIComponent(
      country
    )}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch universities");
        }
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        setUniversities(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error(err);
        setError("Could not load universities for this country.");
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [country]);

  return (
    <div className="page-container">
      <div className="top-bar">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>

      <h2>Universities in {decodeURIComponent(country)}</h2>

      {loading && <p>Loading universities...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && universities.length === 0 && (
        <p>No universities found for "{decodeURIComponent(country)}".</p>
      )}

      {!loading && !error && universities.length > 0 && (
        <p className="count-text">Total universities: {universities.length}</p>
      )}

      <div className="uni-grid">
        {universities.map((uni, index) => (
          <div key={`${uni.name}-${index}`} className="uni-card">
            <h3>{uni.name}</h3>
            <p>
              <strong>Country:</strong> {uni.country}
            </p>
            <button
              type="button"
              onClick={() =>
                navigate(`/university/${encodeURIComponent(country)}/${index}`, {
                  state: { university: uni },
                })
              }
            >
              Detail page
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversitiesList;