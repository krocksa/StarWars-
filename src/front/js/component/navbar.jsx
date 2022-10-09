import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<div className="imgnavbar">
					<img src="https://th.bing.com/th/id/OIP.zLHXJbX9jteXJ6bZT32ZbwHaES?pid=ImgDet&rs=1" className="img-thumbnail" alt="" />
			</div>
				</Link>
			<div className="navitulo ml-auto">
				<h1><strong> Star Roger Wars</strong></h1>
			</div>
				<div className="ml-auto">
					{/* <Link to="/demo"> */}
						<button onClick={() => navigate('/demo')} className="btn btn-primary favorites">Favorites</button>
					{/* </Link> */}
				</div>
			</div>
		</nav>
	);
};
