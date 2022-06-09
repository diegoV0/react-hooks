import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const color = useContext(ThemeContext);

  return (
    <div className="header">
      <h2 style={{ color }}>React Hooks</h2>
    </div>
  );
};

export default Header;
