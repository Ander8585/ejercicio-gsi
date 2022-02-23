import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainBoard from "./components/mainboard/MainBoard";
import TrendingCategiesGrid from "./components/trending_categories/TrendingCategiesGrid";
import packageJson from "../package.json";
import { helpHttp } from "./helpers/helpHttp";
import { ThemeProvider } from "./context/ThemeContext";
import AuthContext from "./context/AuthContext";
///////////////////////////////////////////////////////////////////////////
///////     /*   Redireccionado de despliegue en Github     */       //////
///////     /* "https://ander8585.github.io/ejercicio-gsi/", */      //////
///////////////////////////////////////////////////////////////////////////
///////     /*   Redireccionado de despliegue en local      */       //////
///////            /* "http://localhost:3000", */                    //////
///////////////////////////////////////////////////////////////////////////

const api = helpHttp();

const options = {
	headers: {
		Accept: "*/*",
	},
};

let accessToken = "";

function App() {
	/* const [isLogguedIn, setIsLogguedIn] = useState(false); */
	const [actionCloseMenu, setActionCloseMenu] = useState(false);
	const { setIsLogged } = useContext(AuthContext);

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
						setIsLogged(true);
					} else {
						console.log("HUBO UN ERROR");
						console.log(res);
					}
				})
				.catch((err) => console.log("Error:\n", err));
		} else if (params.get("error") === "access_denied") {
			console.log("El usuario denegó el acceso");
			alert("The user denied the access.");
		}
		window.history.replaceState({}, "", packageJson.homepage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="App" onClick={(e) => setActionCloseMenu(!actionCloseMenu)}>
			<ThemeProvider>
				<Header actionCloseMenu={actionCloseMenu} />
				<MainBoard accessToken={accessToken} />
				<h2>Trending Categories</h2>
				<TrendingCategiesGrid />
				<br />
				<br />
			</ThemeProvider>
		</div>
	);
}

export default App;
