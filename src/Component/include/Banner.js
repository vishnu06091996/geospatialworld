import React from 'react';
//import imageUri from './../assets/images/logo.png';

const Banner = (props) =>{
	return(
		<div className="Banner">
			<div className="Bnr_inner">
				<div className="hd_bottom">
					<div className="main_wrapper">
		
						<div className="onerow">
							<div className="col12">
								<div className="LogoDate logobx">
									<div className="logo">
										<img src={props.BannerLogo} />
									</div>
									<div className="dates">
										<span className="date">{props.bannerdates}</span>
									</div>
								</div>
								<div className="logo logobx theme">
									<img src={props.BannerTheme} alt="Theme: Geography & Humanity" />
								</div>
								<div className="header_com">
									<h3>{props.BnrConnecting}</h3>
									<h2>{props.BnrHeading}</h2>
									<p>{props.BnrText}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner;


