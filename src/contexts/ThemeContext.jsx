import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		// retrieving the saved theme from localStorage...
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) return savedTheme;

		// Instead of checking system preference, default to darkMode
		return "lightMode";
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

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
