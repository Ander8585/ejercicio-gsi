import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import TrendingCategiesGrid from "./components/TrendingCategiesGrid";

const initTheme = localStorage.getItem("darkTheme");
if (initTheme) document.documentElement.classList.add(initTheme);

function App() {
	const [theme, setTheme] = useState(initTheme);
	const changeTheme = (e) => {
		const currentTheme = e.target.checked ? "dark" : "";
		setTheme(currentTheme);
		document.documentElement.classList.toggle("dark");
		localStorage.setItem("darkTheme", currentTheme);
	};
	return (
		<div className="App">
			<Header theme={theme} changeTheme={changeTheme} />
			<MainBoard theme={theme} />
			<h2>Trending Categories</h2>
			<TrendingCategiesGrid theme={theme} />
		</div>
	);
}

export default App;
