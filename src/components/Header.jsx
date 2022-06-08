import React, { useState } from "react";

const Header = () => {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div className="Header">
      <h2>React Hooks</h2>
      <button type="button" onClick={() => setdarkMode(!darkMode)}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
