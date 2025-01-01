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
import { useNavigate } from "@remix-run/react";
export default () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Template App
            </h1>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center}/>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button onClick={() => window.location.href = "/" }>
          <div className="h-[35px] w-[35px]">
            <img src="/icons8-home-light.svg" alt="Home" className="hidden dark:block"/>
            <img src="/icons8-home-dark.svg" alt="Home" className="dark:hidden"/>
          </div>
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button onClick={() => window.open("https://github.com/eiei114/im-ts-frontend-template", "_blank") }>
          <div className="h-[35px] w-[35px]">
            <img src="/icons8-github-light.svg" alt="GitHub" className="hidden dark:block"/>
            <img src="/icons8-github-dark.svg" alt="GitHub" className="dark:hidden"/>
          </div>
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
        <Button onClick={toggleDarkMode}>
        <div className="h-[35px] w-[35px]">
           <img src="/on-darkmode.svg" alt="Sun" className="hidden dark:block"/>
           <img src="/on-lightmode.svg" alt="Moon" className="dark:hidden"/>
        </div>
        </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}