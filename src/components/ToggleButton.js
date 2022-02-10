import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({
	height = "1rem",
	bgLeftColor = "white",
	knobLeftColor = "black",
	bgRightColor = "white",
	knobRightColor = "black",
	top = "0",
	left = "0",
	boderColor = "black",
	changeTheme,
	theme,
}) => {
	return (
		<div className="toggle-button-component">
			<div
				className="toggle-button-container"
				style={{
					"--height": height,
					"--bg-light-color": bgLeftColor,
					"--bg-dark-color": bgRightColor,
					"--knob-light-color": knobLeftColor,
					"--knob-dark-color": knobRightColor,
					"--top": top,
					"--left": left,
					"--border-color": boderColor,
				}}
			>
				<div className="toggle-button r" id="toggle-button-1">
					<input
						type="checkbox"
						className="checkbox"
						onChange={changeTheme}
						checked={theme === "dark"}
					/>
					<div className="knobs"></div>
					<div className="layer"></div>
				</div>
			</div>
		</div>
	);
};

export default ToggleButton;
