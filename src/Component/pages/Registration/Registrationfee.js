import React, { useEffect, useState } from 'react';

import Registrationfeelist from './Registrationfeelist';
import './Registrationfee.css';

import Banner from '.././../include/Banner';

import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';


const Registrationfee = () =>{
	useEffect(() =>{
		window.scrollTo(0, 0);
	}, [])

	const [getdata, setGetdata] = useState(Registrationfeelist)

	return(
		<div className="inner registration Small_Banner">
			<Banner 
			BannerLogo={logo}
			bannerdates="9-12 JUNE 2022 • AMSTERDAM fgfgfgfg"
			BannerTheme={Theme} />
			

			<div className="bodycontainer">
				<div className="body_container">
					<div className="content_container">
						<div className="main_wrapper">
							<div className='row'>
								<div className='col-md-7'>
									<h2>REGISTRATION FEES</h2>
								</div>
								<div className='col-md-5'>
								<div className="btn_blk top">
									<a href="https://geospatialworldforum.org/express-registration.asp" target="_blank">Register Now</a>
								</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-12'>
									<h3 className='in-person'>(Exclusive of 21% VAT)</h3>
								</div>
								<div className='col-12'>
									<table width="100%" cellSpacing="0" cellPadding="0" border="0" className='mb-0'>
										<tbody>
											<tr>
												<td className="registr_Title"><strong>Delegate Category </strong></td>
												<td className="registr_Title"><strong>Early Bird<br />(Till 1st March2022)</strong></td>
												<td className="registr_Title"><strong>Regular</strong><br /></td>
												<td className="registr_Title"><strong>Late <br /> (1 May onwards)</strong></td>
												<td className="registr_Title"><strong>Benefits</strong></td>
											</tr>
										</tbody>
									</table>
									{
										getdata.map((Items, index) =>{
											return(
												<table width="100%" cellSpacing="0" cellPadding="0" border="0"  key={index}>
													<tbody>
													<tr>
														<td colSpan="5" bgcolor="#b00093" className="table_Hd">
															<strong className={`cat_reg ${Items.color}`} >{Items.Title}</strong>
														</td>
													</tr>

													{
														Items.Content.map((SubItems, i) =>{
															return(
																<tr key={i}>
																	<td bgcolor="#f7f7f7" data-th="Delegate Category"><strong className="cat">{SubItems.DelegateCategory}</strong></td>
																	<td bgcolor="#f7f7f7" data-th="Early Bird (Till 1st March2022)"><span>{SubItems.EarlyBird}</span></td>
																	<td bgcolor="#f7f7f7" data-th="Regular"><span>{SubItems.Regular}</span></td>
																	<td bgcolor="#f7f7f7" data-th="Late (1 May onwards)"><span>{SubItems.Late}</span></td>
																	<td bgcolor="#f7f7f7" data-th="Benefits">
																		<span>{SubItems.Benefits}</span>
																	</td>
																</tr>
															)
														})
													}
													</tbody>
												</table>
											)
										})
									}
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="rules">
										<strong>GWF 2022 registration Cancellation Policy</strong>
										<ul>

											<li>Cancellation for Paid registration received on or before 10th March 2022 shall be refundable, less a Euro 50 processing fee.</li>
											<li>Registration cancellation requests received on or before 1st April 2022 will be provided 50% registration fee refunds only</li>
											<li>No registration fee refund requests will be entertained after 1st April 2022</li>
											<li>A discount of 10% shall be given for a group of 5 or more delegates registering from one organization	</li>
										</ul>
										{/* <!--<p><b><i>The Cancelation policy, must also be defined well in the Registartion form, With the check box , I Agree.</i></b></p>--> */}
									</div>
								</div>
							</div>
							<div className="orow">
								<div className="col-12">
									<div className="btn_blk bottom">
										<a href="https://geospatialworldforum.org/express-registration.asp"  target="_blank">Register Now</a>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Registrationfee;