import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainBoard from "./components/mainboard/MainBoard";
import TrendingCategiesGrid from "./components/trending_categories/TrendingCategiesGrid";
import packageJson from "../package.json";
import { helpHttp } from "./helpers/helpHttp";
///////////////////////////////////////////////////////////////////////////
///////     /*   Redireccionado de despliegue en Github     */       //////
///////     /* "https://ander8585.github.io/ejercicio-gsi/", */      //////
///////////////////////////////////////////////////////////////////////////
///////     /*   Redireccionado de despliegue en local      */       //////
///////            /* "http://localhost:3000", */                    //////
///////////////////////////////////////////////////////////////////////////

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
	const [actionCloseMenu, setActionCloseMenu] = useState(false);

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
		<div className="App" onClick={(e) => setActionCloseMenu(!actionCloseMenu)}>
			<Header
				theme={theme}
				changeTheme={changeTheme}
				isLogguedIn={isLogguedIn}
				setIsLogguedIn={setIsLogguedIn}
				actionCloseMenu={actionCloseMenu}
			/>
			<MainBoard
				theme={theme}
				accessToken={accessToken}
				isLogguedIn={isLogguedIn}
			/>
			<h2>Trending Categories</h2>
			<TrendingCategiesGrid theme={theme} />
			<br />
			<br />
		</div>
	);
}

export default App;
