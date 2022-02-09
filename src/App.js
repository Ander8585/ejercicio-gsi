import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import TrendingCategiesGrid from "./components/TrendingCategiesGrid";

function App() {
	return (
		<div className="App">
			<Header />
			<MainBoard />
			<h2>Trending Categories</h2>
			<TrendingCategiesGrid />
		</div>
	);
}

export default App;
