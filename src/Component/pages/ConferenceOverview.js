import React, {useEffect} from 'react';
import Banner from './../include/Banner';
import Exhibitcomponent from './../Exhibitcomponent'

import logo from "./../assets/images/euro.png";
import Theme from './../assets/images/awardsLogo1.png';

const About = () =>{
	useEffect(() =>{
		window.scrollTo(0, 0);
	},[])
	return(
		<div className="About_page about_scn Mediam_Banner">
			<Banner 
				BannerLogo={logo} 
				bannerdates="9-12 MAY 2022 • AMSTERDAM" 
				BannerTheme={Theme} 
				BnrConnecting="Connecting Communities" 
				BnrHeading="A unique, unmissable experience for geospatial professionals worldwide" 
				BnrText="Join professionals and leaders representing the entire geospatial ecosystem" />
		
		
			<div className="body_container">
				<div className="exhibit_container">
					<div className="main_wrapper">
						<Exhibitcomponent />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;