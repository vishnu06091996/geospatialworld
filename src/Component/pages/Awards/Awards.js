import React, {useEffect} from "react";
import Banner from '.././../include/Banner';
import ImportantDate from '.././../include/ImportantDate';
import Awardcategories from './AwardCategories/Awardcategories';
import Spotlight from './Spotlight/Spotlight';
import logo from ".././../assets/images/geospatial-world-award.png";
import Winners2021 from './Winners2021/Winners2021';
import Excellenceawards2020 from './ExcellenceAwards2020/Excellenceawards2020';


import './Awards.css'

const Awards = () =>{
    useEffect(() =>{
		window.scrollTo(0, 0);
	}, [])
	return(
		<div className="Awards theme-None Mediam_Banner">
			<Banner 
			BannerLogo={logo} 
            bannerdates="Showcase your" 
            BnrConnecting="geospatial excellence" 
            BnrHeading="We're looking forward to recognize more geospatial best practices from around the
            globe. Celebrate your achievement with us!" 
            BnrText="Nomination is now closed Please write to awards@geospatialworldforum.org for any queries." />
		
			<div className="body_container">
				<div className="content_container">
					<div className="main_wrapper">
						<div className="row">
                            <div className="col-12">
                                <div className="intro_text text-center">
                                    <p>Initiated in 2007, Geospatial World Awards are an internationally-acclaimed premium awards recognizing exemplary practices in the global geospatial industry. With the ceremony taking place at Geospatial World Forum every year, the awards have recognized over 150+ organizations till date.</p>
                                    <p>Think your project has what it takes to become a winner? Submit your nomination and find out! </p>
                                </div>
                            </div>
						</div>
                        <ImportantDate 
                            Heading={"IMPORTANT DATES"} 
                            Abstract={"Abstract Submission"} 
                            AbstractDate={"10 February 2022"} 
                            Acceptance={"Acceptance Notification"} 
                            AcceptanceDate={"20 February 2022 "} 
                            Speakers={"Speakers Registration "} 
                            SpeakersDate={"01 March 2022"} />
                        
                        {/* Award Categories */}
                        <Awardcategories 
                            AwardHeading={"Award Categories"} 
                            AwardApplication={"Application Excellence Awards"} 
                            AwardApplicationText={"Exemplary usage of geospatial tools and solutions in various fields"} 
                            AwardTechnology={"Technology Innovation Awards"} 
                            AwardTechnologyText={"Disruptive innovation that drives wider adoption of geospatial technology in the mainstream "} 
                            AwardPolicy={"Policy Implementation Awards "} 
                            AwardPolicyText={"Policy framework that directly impacts the development of geospatial science, technology and business "} />
                        
                        {/* 2021 WINNERS */}
                        <Winners2021 />

					</div>
				</div>
                {/* Ready for the Spotlight? */}

                <Spotlight />

                <div className="awards_container Excellenceawards_scn">
                    <div className="main_wrapper">
                        <div className="onerow">
                            <div className="col12">
                                <div className="awardees_container">
                                    <Excellenceawards2020  awardHeading="GEOSPATIAL EXCELLENCE AWARDS 2020" />
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
			</div>
            <div className="aw_contact_container">
                <div className="main_wrapper">

                    <div className="onerow">
                        <div className="col12">
                            <h3>Contact</h3>
                            <p>Sarah Hisham</p>
                            <a href="mailto:awards@geospatialworldforum.org">awards@geospatialworldforum.org</a>
                        </div>
                    </div>

                </div>
            </div>
	    </div>
	)
}

export default Awards;