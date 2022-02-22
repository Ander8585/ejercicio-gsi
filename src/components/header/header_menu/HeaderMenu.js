import React from "react";
import "./HeaderMenu.css";

const HeaderMenu = ({ theme = "light", isOpen, onClick }) => {
	return (
		<nav
			className={`header-menu ${theme} ${isOpen ? "is-active" : ""}`}
			onClick={onClick}
		>
			<a href="#header" className="header-menu-item">
				<svg
					className="home-svg"
					xmlns="http://www.w3.org/2000/svg"
					width="816"
					height="411"
					viewBox="0 0 816 411"
					fill="none"
				>
					<path
						d="M595.737 3.26794C675.62 0.26721 739.357 12.323 776.887 37.5324C814.416 62.7417 823.601 99.6686 802.991 142.484C782.382 185.3 733.151 231.565 663.071 273.977C592.991 316.389 506.053 352.532 415.981 376.7C325.909 400.869 237.833 411.687 165.656 407.446C93.4785 403.205 41.3118 384.147 17.3901 353.28C-6.53159 322.414 -0.845744 281.496 33.5501 236.988C67.946 192.479 129.093 146.914 207.338 107.485"
						stroke="currentColor"
						strokeWidth="inherit"
					/>
				</svg>
				<span>Home</span>
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
