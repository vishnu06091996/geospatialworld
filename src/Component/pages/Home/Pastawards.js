import React from 'react';
import Excellenceawards2020Items from './../Awards/ExcellenceAwards2020/Excellenceawards2020'

const Pastawards = () =>{
	return(
		<div className="awards_container">
			<div className="main_wrapper">
				<div className="row">
					<div className="col-12">
						<div className="logo">
							<img src={require('.././../assets/images/geospatial-world-award.png')} alt="Geospatial World" />
						</div>
						<strong>Showcase your geospatial excellence</strong>
						<p style={{paddingBottom:"15px", marginBottom:"0"}}>
							We're looking forward to recognize more geospatial best practices from around the globe. <br />Celebrate your achievement with us!
						</p>
						
						<small style={{fontWeight:"700"}}>Nomination is now closed</small>
					</div>
				</div>
				<div className='awardees_container'>
					<Excellenceawards2020Items awardHeading="PAST AWARDEES" />
				</div>
			</div>
		</div>
	)
}

export default Pastawards;