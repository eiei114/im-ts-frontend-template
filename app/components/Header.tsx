import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import DarkModeToggle from "./DarkModeToggle";
import { Button } from "baseui/button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem>
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Template App
            </h1>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem>
          <StyledLink href="/">
            Home
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="https://github.com/eiei114/im-ts-frontend-template">
            GitHub
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
        <Button onClick={toggleDarkMode}>
        {darkMode ? "Light" : "Dark"}
        </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}