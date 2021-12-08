import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Samples from "./Sample";
function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<div className="container"></div>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/samples" element={<Samples />} />
					<Route path="/samples/:id" element={<Samples />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
