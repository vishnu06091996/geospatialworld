import React from 'react';
import CountUp from 'react-countup';

const Exhibitcomponent = () =>{
	return(
		<div className="Exhibitcomponent">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="exhibit_blk">
							<strong>A ONE-STOP CONFERENCE OF CONFERENCES</strong>
							<p>For over a decade, Geospatial World Forum (GWF) has been the premium geospatial industry platform that connects professionals and leaders representing the entire geospatial ecosystem. </p>
							<p>Its collaborative and interactive nature has made GWF a ‘conference of conferences’, offering unique, unmissable experience to geospatial professionals worldwide.</p>
							<ul>
								<li>Public policies</li>
								<li>National geospatial agencies</li>
								<li>Private sector enterprises</li>
								<li>Multilateral and development organizations</li>
								<li>Scientific and academic institutions</li>
								<li>Large end users from government, businesses and consumer services</li>
							</ul>
	
						</div>
					</div>
					<div className="col-md-6">
						<figure className="w-100"><img src={require('./assets/images/aboutImg1.jpg')} alt="" /></figure>
					</div>
				</div>
															
				<div className="row">
					<div className="col-md-3">
						<div className="point text-center">
							<img src={require('./assets/images/thought.png')} alt="" className="w-auto" />
							<strong>Thought Leadership </strong>
						</div>
					</div>
					<div className="col-md-3">
						<div className="point text-center">
							<img src={require('./assets/images/vision.png')} alt="" className="w-auto" />
							<strong>Market Insights </strong>
						</div>
					</div>
					<div className="col-md-3">
						<div className="point text-center">
							<img src={require('./assets/images/policy.png')} alt="" className="w-auto" />
							<strong>Policy Advocacy </strong>
						</div>
					</div>
					<div className="col-md-3">
						<div className="point text-center">
							<img src={require('./assets/images/development.png')} alt="" className="w-auto" />
							<strong>Business Development</strong>
						</div>
					</div>
				</div>
									  
				<div className="participiantScn">
					<div className="exhibit_blk">
						<strong className="text-center">PARTICIPANTS PROFILE</strong>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="part_item">
								<div className="mob_posi">
									 <CountUp end={1500} />
									 <span>+</span>
									 <p>Participants</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="part_item">
								<div className="mob_posi">
									 <CountUp end={700} />
									 <span>+</span>
									 <p>Organizations</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="part_item">
								<div className="mob_posi">
									<CountUp end={70} />
									 <span>+</span>
									 <p>Countries</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="part_item">
								<div className="mob_posi">
									<CountUp end={300} />
									 <span>+</span>
									<p>Speakers <small>50% Industry 40% Users 10% Others</small></p>
								</div>
							</div>
						</div>
					</div>
				</div>
									  
					
									  
									  
				<div className="participiantScn participiantScn2">
					
					<div className="row">
						<div className="col-md-6">
							<div className="GraphBX">
								<p><b>BY GEOGRAPHY</b></p>
								<div className="GraphImg">
									<img src={require('./assets/images/parti_graph1.png')} alt="BY GEOGRAPHY" className="w-100" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="GraphBX">
								<p><b>BY PROFILE</b></p>
								<div className="GraphImg">
									<img src={require('./assets/images/parti_graph2.png')} alt="BY PROFILE" className="w-100" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="GraphBX">
								<p><b>BY ROLE</b></p>
								<div className="GraphImg">
									<img src={require('./assets/images/parti_graph3.png')} alt="BY ROLE" className="w-100" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="GraphBX">
								<p><b>EXHIBITORS PROFILE</b></p>
								<div className="GraphImg">
									<img src={require('./assets/images/parti_graph4.png')} alt="EXHIBITORS PROFILE" className="w-100" />
								</div>
							</div>
						</div>
					</div>
				</div>

									  
									  
									  
			</div>
		</div>
	)
}

export default Exhibitcomponent;








