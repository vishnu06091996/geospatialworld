import React, {useEffect} from "react";
import Banner from '.././../include/Banner';
import ExhibitPreviousExhibitors from './ExhibitPreviousExhibitors';


import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';

const Whyexhibit = () =>{
    useEffect(() =>{
		window.scrollTo(0, 0);
	}, [])
	return(
		<div className="Whyexhibit Mediam_Banner">
			<Banner 
			BannerLogo={logo} 
            bannerdates="9-12 MAY 2022 • AMSTERDAM" 
            BannerTheme={Theme} 
            BnrConnecting="Become a sponsor at GWF 2022" 
            BnrHeading="Establish your position as a leader in the global marketplace" 
            BnrText="This is the most exciting time for the geospatial industry to showcase leadership in technology and innovation" />
		
			<div className="body_container">
				<div className="content_container">
					<div className="main_wrapper">
						<div className="row">
							<div className="col-md-7">
                                <div className="exhibit_blk">
                                    <strong>THE BENEFITS OF SPONSORING</strong>
                                    <p>Reach everyone that matters when you become a sponsor and achieve all your marketing goals. Sponsors will receive:</p>
                                    <ul>
                                        <li>Brand visibility and awareness pre-, during, and post-event</li>
                                        <li>Targeted pre-conference online marketing campaign</li>
                                        <li>New leads generation opportunities</li>
                                        <li>Thought leadership and speaking engagement in core programs</li>
                                        <li>Opportunities to host roundtables, workshops and thematic networking receptions</li>
                                    </ul>

                                    <strong>VALUE PROPOSITION</strong>
                                    <ul>
                                        <li>Position your brand as a global leader in geospatial ecosystem</li>
                                        <li>Get involved in global programs/initiatives</li>
                                        <li>Align your technology innovations with national policies and programs</li>
                                        <li>Meet potential partners for regional distributorship</li>
                                        <li>Connect with end-users from national geospatial agencies, cities, enterprises and development communities</li>
                                    </ul>
                                </div>
                                <div class="price_blk">
                                    <span>Exhibition Rate</span>
                                    <strong>€425 per sqm</strong>
                                </div>
                            </div>
                            
							<div className="col-md-5">
                            <div class="form_blk">
							    <h4>REQUEST FOR FLOOR PLAN</h4>
                                
                            </div>
                            </div>
						</div>
                        <ExhibitPreviousExhibitors />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Whyexhibit;