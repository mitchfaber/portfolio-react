import React from "react";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<div className="navbar-brand">Faber Pizza</div>
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
							<div className="nav-link">Home</div>
						</li>
						<li className="nav-item">
							<div className="nav-link">Menu/Online Order</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
