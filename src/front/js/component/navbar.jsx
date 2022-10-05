import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo"> */}
						<button onClick={() => navigate('/demo')} className="btn btn-primary">Check the Context in action</button>
					{/* </Link> */}
				</div>
			</div>
		</nav>
	);
};
