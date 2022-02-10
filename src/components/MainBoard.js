import React, { useState } from "react";
import "./MainBoard.css";
import userAvatar from "../assets/userAvatar.png";
//------
import userAvatar1 from "../assets/borrar/anderTorres-low.jpg";
import userAvatar2 from "../assets/borrar/chat-media-card.jpg";
import userAvatar3 from "../assets/borrar/customer-5.jpg";
import userAvatar4 from "../assets/borrar/customer-6.jpg";
import userAvatar5 from "../assets/borrar/customer-7.jpg";
//------
import SlideTab from "./SlideTab";

const tabs = [
	{ id: "party", text: <>🎉 Party</> },
	{ id: "matchs", text: <>Matchs</> },
	{ id: "streams", text: <>Streams</> },
];

const defaultTab = localStorage.getItem("defaultTab");

const MainBoard = ({ theme = "light" }) => {
	const listItems = [
		{ imgSrc: userAvatar1 },
		{ imgSrc: userAvatar2 },
		{ imgSrc: userAvatar3 },
		{ imgSrc: userAvatar4 },
		{ imgSrc: userAvatar5 },
		{ imgSrc: userAvatar3 },
		{ imgSrc: userAvatar4 },
		{ imgSrc: userAvatar1 },
	];

	const [selectedUser, setSelectedUser] = useState(userAvatar);

	const onChangeTab = (e) => {
		localStorage.setItem("defaultTab", e.target.value);
	};

	const addUser = (e) => {
		setSelectedUser(listItems[parseInt(e.target.dataset.index)].imgSrc);
	};

	return (
		<main className={`mainboard ${theme}`}>
			<article className={`mainboard-heroimg ${theme}`}>
				<h1 className={`mainboard-heroimg-text ${theme}`}>
					start
					<br />
					<span>streaming</span>
					<br />
					games
					<br />
					differently
				</h1>
				<p className={`small-text ${theme}`}>
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
				<nav className={`mainboard-login ${theme}`}>
					<button className={`mainboard-login-createaccount ${theme}`}>
						Create Account
					</button>
					<button className="mainboard-login-signin">Sign in</button>
				</nav>
				<svg
					className="mainboard-heroimg-bg-svg"
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
				<svg
					className="mainboard-heroimg-bg-svg second"
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
				<svg
					className="mainboard-heroimg-bg-svg third"
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
			</article>
			<article className={`mainboard-imgcenter ${theme}`}>
				<h3 className="imgcenter-title">Nombre Juego</h3>
				<h5 className="imgcenter-subtitle">Join Live Stream</h5>
				<p className="time">
					<span>11 : 45</span>
					<img src={selectedUser} alt="user avatar" className="useravatar" />
				</p>
			</article>
			<article className={`mainboard-selectionarea ${theme}`}>
				<p className={`mainboard-selectionarea-subtitle ${theme}`}>
					01. <span>Choose Platform</span>
				</p>
				<SlideTab
					theme={theme}
					tabItems={tabs}
					defaultItem={defaultTab}
					onChange={onChangeTab}
				/>
				<p className={`mainboard-selectionarea-subtitle ${theme}`}>
					02. <span>Searching Game</span>
				</p>
				<aside className={`searching-box ${theme}`}>
					<div className={`searching-box-input-container ${theme}`}>
						<input type="text" name="search" placeholder="Find games..." />
						<svg
							width="192"
							height="158"
							viewBox="0 0 192 158"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M53 36.5C53 45.6127 45.6127 53 36.5 53C27.3873 53 20 45.6127 20 36.5C20 27.3873 27.3873 20 36.5 20C45.6127 20 53 27.3873 53 36.5ZM73 36.5C73 56.6584 56.6584 73 36.5 73C16.3416 73 0 56.6584 0 36.5C0 16.3416 16.3416 0 36.5 0C56.6584 0 73 16.3416 73 36.5ZM107 46H192V26H107V46ZM0 129H85V109H0V129ZM155.5 138C164.613 138 172 130.613 172 121.5C172 112.387 164.613 105 155.5 105C146.387 105 139 112.387 139 121.5C139 130.613 146.387 138 155.5 138ZM155.5 158C175.658 158 192 141.658 192 121.5C192 101.342 175.658 85 155.5 85C135.342 85 119 101.342 119 121.5C119 141.658 135.342 158 155.5 158Z"
								fill="#808080"
							/>
						</svg>
					</div>
					<div className="user-list">
						<ul className={`user-list-ul ${theme}`}>
							{listItems.map((el, index) => (
								<li key={index}>
									<span className="li-index-user">{index + 1}</span>
									<span>User Name </span>
									<img
										className="li-image-user"
										src={el ? el.imgSrc : userAvatar}
										alt="user avatar"
										style={{ backgroundColor: "black" }}
									/>
									<div>
										<button
											className="li-button-user"
											onClick={addUser}
											data-index={index}
										>
											+
										</button>
									</div>
								</li>
							))}
						</ul>
						<button className={`search-button ${theme}`}>Search Now</button>
					</div>
				</aside>
			</article>
		</main>
	);
};

export default MainBoard;
