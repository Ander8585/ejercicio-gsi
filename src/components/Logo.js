import React from "react";
import "./Logo.css";

const Logo = ({ theme = "light" }) => {
	return (
		<a href="#header" className={`logo ${theme}`}>
			<span>Gamor</span>
			<div className="logo-blur"></div>
		</a>
	);
};

export default Logo;
