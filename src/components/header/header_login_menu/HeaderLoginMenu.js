import React, { useContext } from "react";
import "./HeaderLoginMenu.css";
import ToggleButton from "./ToggleButton";
import ThemeContext from "./../../../context/ThemeContext";
import AuthContext from "./../../../context/AuthContext";

const HeaderLoginMenu = () => {
	const { theme, handleTheme } = useContext(ThemeContext);
	const { handleLog, isLogged } = useContext(AuthContext);

	return (
		<nav className={`header-loginmenu ${theme}`}>
			<ToggleButton
				height={"1.5rem"}
				bgLeftColor="white"
				knobLeftColor="var(--text-color-gray-medium)"
				bgRightColor="white"
				knobRightColor="var(--bgdark-body-color)"
				top={isLogged ? "1.4rem" : "2.4rem"} //2.4
				/* left="-1.1rem" */
				borderColor={
					theme === "dark" ? "transparent" : "var(--text-color-gray-medium)"
				}
				changeTheme={handleTheme}
				theme={theme}
			/>
			<button
				className={`header-loginmenu-signin ${theme}`}
				onClick={handleLog}
			>
				{isLogged ? "Sign out" : "Sign in"}
			</button>
			{!isLogged && (
				<button className={`header-loginmenu-register ${theme}`}>
					Create Account
				</button>
			)}
		</nav>
	);
};

export default HeaderLoginMenu;
