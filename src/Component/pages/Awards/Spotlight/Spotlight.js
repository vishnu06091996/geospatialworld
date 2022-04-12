import React from 'react';
import './Spotlight.css'

const Spotlight = (props) =>{
    return(
        <>
            <div className="spotlight_container">
				<div className="main_wrapper">
					<div className="onerow">
						<div className="col12">
							<h3>Ready for the Spotlight?</h3>
						</div>
					</div>

					<div className="onerow">
						<div className="col12">
							<p>A guest pass to the conference awaits the winners as well as a presentation slot to share your story. <br /> Make sure to block your calendar!</p>
						</div>
					</div>

					<div className="oneorw">				
						<div className="col12">				
							<div className="logo">				
								<img src={require('../.././../assets/images/logo.png')} alt="Geospatial World Forum 2021" />						
							</div>				
							<div className="theme">				
								<img src={require('../.././../assets/images/theme.png')} alt="Geospatial Infrastructure &amp; Digital Twin: Empowering Circular Economy" />				
							</div>		
						</div>				
					</div>
					
					<div className="oneorw">				
						<div className="col12">				
							<span>
								9-12 May 2022 |				
								<small>Amsterdam</small>				
							</span>		
						</div>				
					</div>
				</div>
			</div>
        </>
    )
}

export default Spotlight;