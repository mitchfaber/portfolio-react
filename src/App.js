import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Sample from "./Sample";
import Samples from "./Samples";
import Experience from "./Experience";
import Blogs from "./Blogs";
import Blog from "./Blog";
function App() {
	return (
		<div>
			<div class-name="m-1">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/samples" element={<Samples />} />
						<Route path="/samples/:id" element={<Sample />} />
						<Route path="/blogs" element={<Blogs />} />
						<Route path="/blogs/:id" element={<Blog />} />
						<Route path="/experience" element={<Experience />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
