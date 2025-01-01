import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? "ライトモード" : "ダークモード"}
    </button>
  );
};

export default DarkModeToggle;