import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import HeaderLoginMenu from "./header_login_menu/HeaderLoginMenu";
import HeaderMenu from "./header_menu/HeaderMenu";
import "./Header.css";
import MenuBtn from "./MenuBtn";
import ThemeContext from "./../../context/ThemeContext";

const Header = ({ /* isLogguedIn, setIsLogguedIn, */ actionCloseMenu }) => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const { theme } = useContext(ThemeContext);
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
			<HeaderMenu isOpen={isOpenMenu} onClick={closeMenu} />
			<Logo />
			<HeaderLoginMenu />
			<MenuBtn isOpen={isOpenMenu} onClick={showMenu} />
		</div>
	);
};

export default Header;
