import React from "react";
import "./HeaderLoginMenu.css";
import ToggleButton from "./ToggleButton";

const urlLogin =
	"https://id.twitch.tv/oauth2/authorize?client_id=4grmswqvi0ovo1uus3z5u4z8et1vvt&redirect_uri=http://localhost:3000&response_type=code&scope=viewing_activity_read&force_verify=true";

const HeaderLoginMenu = ({
	theme = "",
	changeTheme,
	isLogguedIn,
	setIsLogguedIn,
}) => {
	const login = () => {
		if (isLogguedIn) {
			let confirmation = window.confirm("Seguro que desea cerrar Sesión?");
			if (confirmation) setIsLogguedIn(false);
		}
		//falta por hacer. Cdo esta logueado no pincha igual
		else document.location = urlLogin;
	};

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
			<button className={`header-loginmenu-signin ${theme}`} onClick={login}>
				{isLogguedIn ? "Sign out" : "Sign in"}
			</button>
			<button className={`header-loginmenu-register ${theme}`}>
				Create Account
			</button>
		</nav>
	);
};

export default HeaderLoginMenu;
