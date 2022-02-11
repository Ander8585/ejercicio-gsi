import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import TrendingCategiesGrid from "./components/TrendingCategiesGrid";
import packageJson from "../package.json";
import { helpHttp } from "./helpers/helpHttp";

const initTheme = localStorage.getItem("darkTheme");
if (initTheme) document.documentElement.classList.add(initTheme);

const api = helpHttp();

const options = {
	headers: {
		Accept: "*/*",
	},
};

let accessToken = "";

function App() {
	const [theme, setTheme] = useState(initTheme);
	const [isLogguedIn, setIsLogguedIn] = useState(false);

	useEffect(() => {
		let params = new URLSearchParams(window.location.search);
		let authCode = params.get("code");

		if (authCode) {
			let urlLogin = `https://id.twitch.tv/oauth2/token?client_id=4grmswqvi0ovo1uus3z5u4z8et1vvt&client_secret=hkhhb1wznmfn865nf8s0sreonhcffr&code=${authCode}&grant_type=authorization_code&redirect_uri=${packageJson.homepage}`;

			api
				.post(urlLogin, options)
				.then((res) => {
					if (!res.err) {
						console.log("CORRECTO!!!");
						accessToken = res.access_token;
						setIsLogguedIn(true);
					} else {
						console.log("HUBO UN ERROR");
						console.log(res);
					}
				})
				.catch((err) => console.log("Error:\n", err));
		} else if (params.get("error") === "access_denied") {
			console.log("El usuario denegó el acceso");
		}
		window.history.replaceState({}, "", packageJson.homepage);
	}, []);

	const changeTheme = (e) => {
		const currentTheme = e.target.checked ? "dark" : "";
		setTheme(currentTheme);
		document.documentElement.classList.toggle("dark");
		localStorage.setItem("darkTheme", currentTheme);
	};
	return (
		<div className="App">
			<Header
				theme={theme}
				changeTheme={changeTheme}
				isLogguedIn={isLogguedIn}
				setIsLogguedIn={setIsLogguedIn}
			/>
			<MainBoard theme={theme} accessToken={accessToken} />
			<h2>Trending Categories</h2>
			<TrendingCategiesGrid theme={theme} />
		</div>
	);
}

export default App;
