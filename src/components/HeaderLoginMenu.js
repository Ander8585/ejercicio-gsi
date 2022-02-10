import React from "react";
import "./HeaderLoginMenu.css";
import ToggleButton from "./ToggleButton";

const HeaderLoginMenu = ({ theme = "", changeTheme }) => {
	return (
		<nav className={`header-loginmenu ${theme}`}>
			<ToggleButton
				height={"1.5rem"}
				bgLeftColor="white"
				knobLeftColor="var(--text-color-gray-medium)"
				bgRightColor="white"
				knobRightColor="var(--bgdark-body-color)"
				top="2.4rem"
				left="-1.1rem"
				boderColor={
					theme === "dark" ? "transparent" : "var(--text-color-gray-medium)"
				}
				changeTheme={changeTheme}
				theme={theme}
			/>
			<button className={`header-loginmenu-signin ${theme}`}>Sign in</button>
			<button className={`header-loginmenu-register ${theme}`}>
				Create Account
			</button>
		</nav>
	);
};

export default HeaderLoginMenu;
