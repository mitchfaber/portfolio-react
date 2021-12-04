import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<div className="container"></div>
				<Routes></Routes>
			</Router>
		</div>
	);
}

export default App;
