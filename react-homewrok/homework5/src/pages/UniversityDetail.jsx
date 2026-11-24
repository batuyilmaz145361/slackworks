import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const UniversityDetail = () => {
  const { country, index } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [university, setUniversity] = useState(
    location.state?.university || null
  );
  const [loading, setLoading] = useState(!location.state?.university);
  const [error, setError] = useState("");

  useEffect(() => {
    if (university) return;

    let isMounted = true;
    setLoading(true);
    const url = `http://universities.hipolabs.com/search?country=${encodeURIComponent(
      country
    )}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        const idx = Number(index);
        if (Array.isArray(data) && data[idx]) {
          setUniversity(data[idx]);
        } else {
          setError("University details not found.");
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setError("Failed to fetch university details.");
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [country, index, university]);

  return (
    <div className="page-container">
      <button type="button" onClick={() => navigate(-1)} className="back-btn">
        ← Go Back
      </button>

      {loading && <p>Loading university details...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && university && (
        <div className="detail-card">
          <h2>{university.name}</h2>
          <p>
            <strong>Country:</strong> {university.country}
          </p>
          <p>
            <strong>Alpha-2 Code:</strong> {university.alpha_two_code || "N/A"}
          </p>
          <p>
            <strong>State / Province:</strong>{" "}
            {university["state-province"] || "Not specified"}
          </p>
          <p>
            <strong>Domains:</strong>{" "}
            {university.domains && university.domains.length > 0
              ? university.domains.join(", ")
              : "N/A"}
          </p>

          <div className="links-box">
            <strong>Web Pages:</strong>
            {university.web_pages && university.web_pages.length > 0 ? (
              <ul>
                {university.web_pages.map((page) => (
                  <li key={page}>
                    <a href={page} target="_blank" rel="noreferrer">
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No web pages available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityDetail;