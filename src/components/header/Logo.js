import React, { useContext } from "react";
import "./Logo.css";
import ThemeContext from "./../../context/ThemeContext";

const Logo = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<a href="#header" className={`logo ${theme}`}>
			<span>Gamor</span>
			<div className="logo-blur"></div>
		</a>
	);
};

export default Logo;
