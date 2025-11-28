// src/components/Dashboard.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div 
      style={{
        padding: "20px",
        background: theme === "light" ? "#f2f2f2" : "#1e1e1e",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "8px"
      }}
    >
      <h2>College Portal Dashboard</h2>
      <p>Welcome to your portal</p>
    </div>
  );
}
