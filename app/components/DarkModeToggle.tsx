import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "baseui/button";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Button onClick={toggleDarkMode}>
      {darkMode ? "ライトモード" : "ダークモード"}
    </Button>
  );
};

export default DarkModeToggle;