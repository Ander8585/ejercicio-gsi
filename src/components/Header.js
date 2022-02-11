import React from "react";
import Logo from "./Logo";
import HeaderLoginMenu from "./HeaderLoginMenu";
import HeaderMenu from "./HeaderMenu";
import "./Header.css";

const Header = ({ theme = "", changeTheme, isLogguedIn, setIsLogguedIn }) => {
	return (
		<div className={`header ${theme}`} id="header">
			<HeaderMenu theme={theme} />
			<Logo theme={theme} />

			<HeaderLoginMenu
				theme={theme}
				changeTheme={changeTheme}
				isLogguedIn={isLogguedIn}
				setIsLogguedIn={setIsLogguedIn}
			/>
		</div>
	);
};

export default Header;
