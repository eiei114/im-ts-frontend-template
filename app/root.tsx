import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import "./styles/tailwind.css";
import { Provider as StyletronProvider } from "styletron-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import { UserInformationProvider } from "./contexts/UserInformationContext";
import { UserSecretProvider } from "./contexts/UserSecretContext";
import { styletron } from "./styletron";
export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<StyletronProvider value={styletron}>
					<CustomThemeProvider>
						<UserSecretProvider>
							<UserInformationProvider>
								<Header />
								{children}
								<Footer />
							</UserInformationProvider>
						</UserSecretProvider>
					</CustomThemeProvider>
				</StyletronProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
