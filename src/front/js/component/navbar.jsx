import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<div className="imgnavbar">
					<img src="https://th.bing.com/th/id/OIP.zLHXJbX9jteXJ6bZT32ZbwHaES?pid=ImgDet&rs=1" class="img-thumbnail" alt="" />
					</div>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo"> */}
						<button onClick={() => navigate('/demo')} className="btn btn-primary">Favorites</button>
					{/* </Link> */}
				</div>
			</div>
		</nav>
	);
};
