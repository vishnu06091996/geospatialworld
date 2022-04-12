import React, {useEffect} from 'react';
import Banner from './../include/Banner'
import BannerBtTitle from './../include/BannerBtTitle';
import logo from "./../assets/images/logo.png";
import Theme from './../assets/images/theme.png';
import Abouthome from './Home/Abouthome';
import Testimonial from './Home/Testimonial';
import Discovertheprimary from './Home/Discovertheprimary';
import Pastawards from './Home/Pastawards';
import MissedGWF2021 from './Home/MissedGWF2021';
import Conferencepartners from './Home/Conferencepartners';

// import NestedListMap from './Nested-List-in-ReactJs/NestedListMap'

const Home = () =>{
	useEffect(() =>{
		window.scrollTo(0, 0);
	  }, [])
	return(
		<div className="Home_scn">
			
			<Banner 
				bannerdates="9-12 MAY 2022 & AMSTERDAM" 
				BannerLogo={logo} 
				BannerTheme={Theme} />
		
			<BannerBtTitle />
			<Abouthome />
			<Testimonial />
			<Discovertheprimary />
			<Pastawards />
			<MissedGWF2021 />
			<Conferencepartners />

			{/* Nested List in Map Function, this is demo perpouse. this is hide section in page */}
			{/* <NestedListMap /> */}
		</div>
	)
}

export default Home;

