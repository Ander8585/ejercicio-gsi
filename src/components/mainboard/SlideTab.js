import React from "react";
import "./SlideTab.css";

const SlideTab = ({
	theme,
	tabItems = [],
	defaultItem = "0",
	onChange = () => {},
}) => {
	return (
		<div>
			{tabItems.map((item, index) => (
				<input
					className="radio-platformmenu"
					type="radio"
					name="platformradio"
					id={item.id}
					// eslint-disable-next-line eqeqeq
					defaultChecked={index == defaultItem} //doble igual con toda intención
					value={index}
					onChange={onChange}
					key={item.id}
				/>
			))}
			<nav className={`nav-platformmenu ${theme}`}>
				{tabItems.map((item, index) => (
					<label
						htmlFor={item.id}
						className={`platformradio-label ${theme}`}
						key={item.id}
					>
						{item.text}
					</label>
				))}
			</nav>
		</div>
	);
};

export default SlideTab;
