import React from "react";

const HomePage = () => {
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome Home 🔥</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;