import React from "react";
import "./HeaderLoginMenu.css";

const HeaderLoginMenu = () => {
	return (
		<nav className="header-loginmenu">
			<button className="header-loginmenu-signin">Sign in</button>
			<button className="header-loginmenu-register">Create Account</button>
		</nav>
	);
};

export default HeaderLoginMenu;
