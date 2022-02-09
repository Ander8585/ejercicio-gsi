import React from "react";
import Logo from "./Logo";
import HeaderLoginMenu from "./HeaderLoginMenu";
import HeaderMenu from "./HeaderMenu";
import "./Header.css";

const Header = () => {
	return (
		<div className="header" id="header">
			<HeaderMenu />
			<Logo />
			<HeaderLoginMenu />
		</div>
	);
};

export default Header;
