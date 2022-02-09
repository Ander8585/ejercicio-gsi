import React from "react";
import "./MainBoard.css";
import userAvatar from "../assets/userAvatar.png";

const MainBoard = () => {
  const listItems = Array(9).fill(null);

	return (
		<main className="mainboard">
			<article className="mainboard-heroimg">
				<h1 className="mainboard-heroimg-text">
					start
					<br />
					<span>streaming</span>
					<br />
					games
					<br />
					differently
				</h1>
				<p className="small-text">
					<small>
						gamor now has <span className="">stream party</span> platform
					</small>
					<svg
						className="twisted-line-svg"
						xmlns="http://www.w3.org/2000/svg"
						width="70"
						height="10"
						viewBox="0 0 308 18"
						fill="none"
					>
						<path
							d="M2 15.4239C15.6739 13.9365 29.4627 12.6952 43.1879 11.3272C52.8547 10.3637 62.7084 9.93124 72.3344 8.89477C81.5083 7.90696 90.5769 6.65033 99.7518 5.66221C117.996 3.69736 137.346 2.89339 155.945 2.23762C166.361 1.87038 177.194 1.9894 187.623 2.18961C191.523 2.26447 194.882 3.06565 198.584 3.61386C204.116 4.43298 209.624 5.36785 215.226 6.04628C229.969 7.83156 244.775 9.2248 259.378 11.3272C270.843 12.9778 282.946 14.6302 294.823 15.2639C298.426 15.4561 302.55 15.404 306 16"
							stroke="currentColor"
							strokeWidth="10"
							strokeLinecap="round"
						/>
					</svg>
				</p>
				<nav className="mainboard-login">
					<button className="mainboard-login-createaccount">
						Create Account
					</button>
					<button className="mainboard-login-signin">Sign in</button>
				</nav>
			</article>
			<article className="mainboard-imgcenter">
				<h3 className="imgcenter-title">Nombre Juego</h3>
				<h5 className="imgcenter-subtitle">Join Live Stream</h5>
				<p className="time">
					<span>11 : 45</span>
					<img
						src={false || userAvatar}
						alt="user avatar"
						className="useravatar"
					/>
				</p>
			</article>
			<article className="mainboard-selectionarea">
				<p className="mainboard-selectionarea-subtitle">
					01. <span>Choose Platform</span>
				</p>
				<input
					className="radio-platformmenu"
					type="radio"
					name="platformradio"
					id="party"
					defaultChecked
					value={1}
				/>
				<input
					className="radio-platformmenu"
					type="radio"
					name="platformradio"
					id="matchs"
					value={2}
				/>
				<input
					className="radio-platformmenu"
					type="radio"
					name="platformradio"
					id="streams"
					value={3}
				/>
				<nav className="nav-platformmenu">
					<label htmlFor="party" className="platformradio-label">
						🎉 Party
					</label>
					<label htmlFor="matchs" className="platformradio-label">
						Matchs
					</label>
					<label htmlFor="streams" className="platformradio-label">
						Streams
					</label>
				</nav>
				<p className="mainboard-selectionarea-subtitle">
					02. <span>Searching Game</span>
				</p>
				<aside className="searching-box">
					<div className="searching-box-input-container">
						<input type="search" name="search" placeholder="Search..." />
					</div>
					<div className="user-list">
						<ul className="user-list-ul">
							{listItems.map((el, index) => (
								<li key={index}>
									<span className="li-index-user">{index + 1}</span>
									<span>User Name </span>
									<img
										className="li-image-user"
										src={userAvatar}
										alt="user avatar"
										style={{ backgroundColor: "black" }}
									/>
									<div>
										<button className="li-button-user">+</button>
									</div>
								</li>
							))}
						</ul>
						<button className="search-button">Search Now</button>
					</div>
				</aside>
			</article>
		</main>
	);
};

export default MainBoard;
