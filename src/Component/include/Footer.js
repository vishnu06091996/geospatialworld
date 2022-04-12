import React from 'react';

const Footer = () =>{
	return(
		<div className="footer">
		<div className="ft_top">
			<div className="container">
			
				<div className="row">
					<div className="col-md-4">
						<div className="social_blk">
							<h3>Social Connection</h3>
							<p>Follow us on social media<br />for regular updates</p>
							<ul className="ntSocialIcons">				
								<li>
									<a href="https://www.facebook.com/GeospatialMedia/" target="_blank">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>				
								<li>
									<a href="https://twitter.com/GeospatialM" target="_blank">
										<i className="fab fa-twitter"></i>
									</a>
								</li>				
								<li>
									<a href="https://www.linkedin.com/company/geospatial-media-and-communications/" target="_blank">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</li>				
								<li>
									<a href="https://www.youtube.com/geospatialmedia" target="_blank">
										<i className="fab fa-youtube"></i>
									</a>
								</li>				
							</ul>
						</div>
					</div>
					<div className="col-md-4">
						<div className="archive_blk">
							<h3>ARCHIVE</h3>
							<ul>
								<li><a href="https://geospatialworldforum.org/2021" target="_blank">2021</a></li>
								<li><a href="https://geospatialworldforum.org/2020" target="_blank">2020</a></li>
								<li><a href="https://geospatialworldforum.org/2019" target="_blank">2019</a></li>
								<li><a href="https://geospatialworldforum.org/2018" target="_blank">2018</a></li>
								<li><a href="#">… more</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-4">
						<div className="social_blk address">
							<h3>GWF 2022 SECRETARIAT</h3>
							<p>				
								Geospatial Media and Communications B.V.<br />				
								Business Center, Barchman Wuytierslaan 10<br />				
								3818 LH Amersfoort, The Netherlands<br />				
								Email: <a href="#">info@geospatialworldforum.org</a>				
							</p>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
		<div className="ft_bottom">
			<div className="main_wrapper">

				<div className="onerow">
					<div className="col12">
						<address>				
							© Geospatial Media and Communications Pvt. Ltd. All Rights Reserved				
						</address>
					</div>
				</div>

			</div>
		</div>
		
	</div>
	)
}


export default Footer;