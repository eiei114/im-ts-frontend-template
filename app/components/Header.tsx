import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "./ui/navigation-menu";
export default () => {
	const { toggleDarkMode } = useContext(ThemeContext);
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
					Template App
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink href="/">Home</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/about">About</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Button
						onClick={() =>
							window.open(
								"https://github.com/eiei114/im-ts-frontend-template",
								"_blank",
							)
						}
					>
						<div className="h-[35px] w-[35px]">
							<img
								src="/icons8-github-light.svg"
								alt="GitHub"
								className="hidden dark:block"
							/>
							<img
								src="/icons8-github-dark.svg"
								alt="GitHub"
								className="block dark:hidden"
							/>
						</div>
					</Button>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Button onClick={toggleDarkMode}>
						<div className="h-[35px] w-[35px]">
							<img
								src="/on-darkmode.svg"
								alt="Sun"
								className="hidden dark:block"
							/>
							<img
								src="/on-lightmode.svg"
								alt="Moon"
								className="block dark:hidden"
							/>
						</div>
					</Button>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
