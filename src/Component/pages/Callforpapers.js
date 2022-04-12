import React, { useEffect } from "react";
import Banner from './../include/Banner';
import Keytopics from './../Keytopics';


import logo from "./../assets/images/gw-logo.jpg";
import Theme from './../assets/images/geospatial-world-award.png';

const Callforpapers = () =>{
	useEffect(() =>{
		window.scrollTo(0, 0);
	},[])
	return(
		<div className="CallforpapersPage Small_Banner">
			<Banner 
			BannerLogo={logo}
			bannerdates="9-12 JUNE 2022 • AMSTERDAM"
			BannerTheme={Theme} />
		
			<div className="body_container">
				<div className="content_container">
					<div className="main_wrapper">
						<div className="row text-center">
							<div className="col-12">
								<h2>
									Submit Your Interest to Speak<br />
									<small>Deadline: 10 February 2022</small>
								</h2>
								<p>
									GWF 2022 aims to create an agenda that focuses on aligning geospatial capabilities with national and global priorities, towards a dynamic digital society.
								</p>
							</div>
						</div>
		
						<Keytopics />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Callforpapers;