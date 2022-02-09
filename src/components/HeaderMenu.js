import React from "react";
import "./HeaderMenu.css";

const HeaderMenu = () => {
	return (
		<nav className="header-menu">
			<a href="#header" className="header-menu-item">
				Home
			</a>
			<a href="#header" className="header-menu-item">
				Streams
			</a>
			<a href="#header" className="header-menu-item">
				Party
			</a>
			<a href="#header" className="header-menu-item">
				Premium
			</a>
		</nav>
	);
};

export default HeaderMenu;
