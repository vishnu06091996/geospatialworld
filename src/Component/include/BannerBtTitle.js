import React from 'react';

const BannerBtTitle = () =>{
	return(
		<div className="BannerBtTitle">
			<div className="BnrBtTitle_inner">
				<div className="tiles">
					<a href="#">
						<div className="block">
							<small>BECOME AN EXHIBITOR</small>
							<strong>Request Floor Plan</strong>
						</div>
					</a>
				</div>
				<div className="tiles">
					<a href="#">
						<div className="block">
							<small>SUBMIT INTEREST</small>
							<strong>BECOME A SPONSOR</strong>
						</div>
					</a>
				</div>
				<div className="tiles">
					<a href="#">
						<div className="block">
							<small>TAKE THE PODIUM</small>
							<strong>SUBMIT ABSTRACT</strong>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default BannerBtTitle;