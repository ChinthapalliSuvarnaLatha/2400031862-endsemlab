// src/components/ThemeToggle.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
        background: theme === "light" ? "#333" : "#fff",
        color: theme === "light" ? "#fff" : "#333",
        borderRadius: "8px",
        border: "none"
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
}
