import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
	const [activePage, setActivePage] = useState();
	function changePage(e) {
		setActivePage(e.target.id);
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link to="/" className="navbar-brand">
					Mitch Faber
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link
								id="home-nav"
								to="/"
								className={activePage === "home-nav" ? "nav-link active" : "nav-link"}
								onClick={changePage}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								id="sample-nav"
								to="/samples"
								className={activePage === "sample-nav" ? "nav-link active" : "nav-link"}
								onClick={changePage}>
								Samples
							</Link>
						</li>
						<li className="nav-item">
							<Link
								id="experience-nav"
								to="/experience"
								className={activePage === "experience-nav" ? "nav-link active" : "nav-link"}
								onClick={changePage}>
								Experience
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
