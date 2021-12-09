import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Sample from "./Sample";
import Samples from "./Samples";
function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<div className="container"></div>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/samples" element={<Samples />} />
					<Route path="/samples/:id" element={<Sample />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
