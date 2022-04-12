import React, { useState } from 'react';

import { NavLink, Link, Route } from "react-router-dom";


const Header = () => {

	const [navbar, setNavbar] = useState(false);

	const scrollHeader = () => {
		if (window.scrollY >= 50) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	window.addEventListener('scroll', scrollHeader);

	const MenuItems = () => {
		//console.log(MenuItems())
	}



	return (
		<>
			<header className={navbar ? "header Header_Fix" : "header"} >
				<div className="container">
					<div className="manu_mn">
						<div className="manu_in">
							<ul>
								{/* <li><Link to="/" onClick={() => MenuItems()}>Home</Link></li>
							<li><Link to="/About" onClick={() => MenuItems()}>OVERVIEW</Link></li>
							<li><Link to="/Callforpapers">BE A SPEAKER</Link></li>
							<li><Link to="/Registration/Registrationfee">Registration</Link></li>
							<li><Link to="/BecomeAsponsor">SPONSORSHIP</Link></li>
							<li><Link to="/Whyexhibit">EXHIBITION</Link></li>
							<li><Link to="/Awards">AWARDS</Link></li>
							<li><Link to="/Partners">PARTNERS</Link></li>
							<li><Link to="/Venue">Venue</Link></li>
							<li><Link to="/Contact">Contact</Link></li> */}
								<li>
									<NavLink to="/" className="nav-link nav-link--active">Home</NavLink>
								</li>

								<li className="curent">
									<a href="#">OVERVIEW</a>
									<ul>
										<li>
											<NavLink to="/About" className="nav-link nav-link--active">OVERVIEW</NavLink>
										</li>
										<li>
											<NavLink to="/ProgramOverview" className="nav-link nav-link--active">Programs</NavLink>

										</li>
										<li>
											<NavLink to="/Products" className="nav-link nav-link--active">Products</NavLink>
										</li>
										<li>
											<NavLink to="/ProgramAdvisoryBoard" className="nav-link nav-link--active">Program Advisory Board</NavLink>
										</li>
									</ul>
								</li>
								<li>
									<NavLink to="/Callforpapers" className="nav-link nav-link--active">BE A SPEAKER</NavLink>
								</li>
								<li>
									<NavLink to="/Registration/Registrationfee" className="nav-link nav-link--active">Registration</NavLink>
								</li>
								<li>
									<NavLink to="/Whyexhibit" className="nav-link nav-link--active">EXHIBITION</NavLink>
								</li>
								<li>
									<NavLink to="/Awards" className="nav-link nav-link--active">AWARDS</NavLink>
								</li>
								<li>
									<NavLink to="/Partners" className="nav-link nav-link--active">PARTNERS</NavLink>
								</li>
								<li>
									<NavLink to="/Venue" className="nav-link nav-link--active">Venue</NavLink>
								</li>
								<li>
									<NavLink to="/Contact" className="nav-link nav-link--active">Contact</NavLink>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</header>

		</>
	)
}


export default Header;