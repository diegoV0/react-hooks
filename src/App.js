import { useState } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div className="App">
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Header />
        <button
          className="button-darkMode"
          type="button"
          onClick={() => setdarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Characters />
      </div>
    </div>
  );
}

export default App;
