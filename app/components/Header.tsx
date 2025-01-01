import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
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
      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem>
          <StyledLink href="/">
          <div className="h-[35px] w-[35px]">
            <img src="/icons8-home-light.svg" alt="Home" className="dark:hidden"/>
            <img src="/icons8-home-dark.svg" alt="Home" className="hidden dark:block"/>
          </div>
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="https://github.com/eiei114/im-ts-frontend-template">
          <div className="h-[50px] w-[50px]">
            <img src="/icons8-github-light.svg" alt="GitHub" className="dark:hidden"/>
            <img src="/icons8-github-dark.svg" alt="GitHub" className="hidden dark:block"/>
          </div>
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