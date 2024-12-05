import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		// retrieving the saved theme from localStorage...
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) return savedTheme;

		// detecting the user's system theme preference on the first load...
		const systemPrefersDark = window.matchMedia(
			"(Prefers-color-scheme: dark)"
		).matches;
		return systemPrefersDark ? "darkMode" : "lightMode";
	});

	const toggleTheme = () => {
		const newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		if (theme === "darkMode") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
