import { createContext, useState } from "react";

const ThemeContext = createContext();

const initTheme = localStorage.getItem("darkTheme"); ////
if (initTheme) document.documentElement.classList.add(initTheme); ////

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(initTheme);

	const handleTheme = (e) => {
		const currentTheme = e.target.checked ? "dark" : "";
		setTheme(currentTheme);
		document.documentElement.classList.toggle("dark");
		localStorage.setItem("darkTheme", currentTheme);
	};

	const data = { theme, handleTheme };

	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
