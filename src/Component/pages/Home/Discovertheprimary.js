import React from 'react';
import {Link} from 'react-router-dom'
import './Discovertheprimary.css';

const Discovertheprimary = () =>{
    return(
        <div className="discover_container">
			<div className="main_wrapper">
				<div className="onerow">
					<div className="col12">
						<h4>TAILORED PROGRAMS TO ACCELERATE INNOVATION</h4>
						<h2>DISCOVER THE PRIMARY TOPICS FOR 2022</h2>
					</div>
				</div>
				
				<div className="onerow">
					<div className="col12">
						<ul>
							<li>
								<Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/aec.jpg')} />
									</div>
									<div className="title">
										<strong>AEC & Digital Cities</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/lidar.jpg')} />
									</div>
									<div className="title">
										<strong>Land Administration</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/climate.jpg')} />
									</div>
									<div className="title">
										<strong>Climate Mitigation & Adaptation</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/location.jpg')} />
									</div>
									<div className="title">
										<strong>Location & Business Intelligence</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/automation.jpg')} />
									</div>
									<div className="title">
										<strong>AI, Automation & Robotics</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/gki.jpg')} />
									</div>
									<div className="title">
										<strong>Geospatial Knowledge Infrastructure</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/health.jpg')} />
									</div>
									<div className="title">
										<strong>Public Health</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/water.jpg')} />
									</div>
									<div className="title">
										<strong>Water Resources</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/food.jpg')} />
									</div>
									<div className="title">
										<strong>Agriculture</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							<li>
                                <Link to="/">
									<div className="pic">
                                        <img src={require('.././../assets/images/Data-Governance.jpg')} />
									</div>
									<div className="title">
										<strong>Data Governance & Ethics</strong>
										<div className="arrow">&nbsp;</div>
									</div>
                                </Link>
							</li>
							
						</ul>
					</div>
				</div>
				
				<div className="row">
					<div className="col-12">
						<div className="speak_blk">
							<h2>INTERESTED TO SPEAK</h2>
							<span>Deadline: 10 February 2022</span>
							<div className="btn_blk">
								<a href="#">SUBMIT ABSTRACT</a>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
    )
}

export default Discovertheprimary;