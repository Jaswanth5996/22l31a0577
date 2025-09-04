import React, { useEffect, useState } from "react";

const Stat = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem("urls")) || [];
    setUrls(storedUrls);
  }, []);

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2>URL Statistics</h2>
      {urls.length === 0 ? (
        <p>No URLs generated yet.</p>
      ) : (
        <ul>
          {urls.map((url, index) => (
            <li key={index}>{url}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Stat;
