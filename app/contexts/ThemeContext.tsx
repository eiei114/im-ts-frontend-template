import { type ReactNode, createContext, useEffect, useState } from "react";

interface ThemeContextType {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
	darkMode: false,
	toggleDarkMode: () => {},
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("darkMode");
		if (storedTheme) {
			setDarkMode(storedTheme === "true");
			if (storedTheme === "true") {
				document.documentElement.classList.add("dark");
			}
		} else {
			// システムのカラースキームを取得
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			setDarkMode(prefersDark);
			if (prefersDark) {
				document.documentElement.classList.add("dark");
			}
		}
	}, []);

	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const newMode = !prev;
			localStorage.setItem("darkMode", newMode.toString());
			if (newMode) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			return newMode;
		});
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
