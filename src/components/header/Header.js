import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import HeaderLoginMenu from "./header_login_menu/HeaderLoginMenu";
import HeaderMenu from "./header_menu/HeaderMenu";
import "./Header.css";
import MenuBtn from "./MenuBtn";

const Header = ({
	theme = "",
	changeTheme,
	isLogguedIn,
	setIsLogguedIn,
	actionCloseMenu,
}) => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const showMenu = (e) => {
		e.stopPropagation();
		setIsOpenMenu(!isOpenMenu);
	};

	const closeMenu = () => {
		setIsOpenMenu(false);
	};

	useEffect(() => {
		closeMenu();
	}, [actionCloseMenu]);

	return (
		<div className={`header ${theme}`} id="header">
			<HeaderMenu theme={theme} isOpen={isOpenMenu} onClick={closeMenu} />
			<Logo theme={theme} />

			<HeaderLoginMenu
				theme={theme}
				changeTheme={changeTheme}
				isLogguedIn={isLogguedIn}
				setIsLogguedIn={setIsLogguedIn}
			/>
			<MenuBtn isOpen={isOpenMenu} onClick={showMenu} />
		</div>
	);
};

export default Header;
