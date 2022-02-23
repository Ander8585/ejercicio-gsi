import { createContext, useState } from "react";
import packageJson from "../../package.json";

const AuthContext = createContext();

const initialAuth = false;

const urlLogin = `https://id.twitch.tv/oauth2/authorize?client_id=4grmswqvi0ovo1uus3z5u4z8et1vvt&redirect_uri=${packageJson.homepage}&response_type=code&scope=viewing_activity_read&force_verify=true`;

const AuthProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(initialAuth);

	const handleLog = (e) => {
		if (isLogged) {
			let confirmation = window.confirm(
				"Are you sure you want to continue logging out?"
			);
			if (confirmation) setIsLogged(false);
		} else document.location = urlLogin;
	};

	const data = { handleLog, isLogged, setIsLogged };

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
