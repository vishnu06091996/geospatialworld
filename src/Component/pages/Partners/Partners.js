import React, { useState, useEffect } from "react";
import Banner from '.././../include/Banner';
import PartnersList from './PartnersList';

import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';
import './Partner.css'

const Partners = (props) =>{
    useEffect(() =>{
		window.scrollTo(0, 0);
	}, [])
    const [items, setItems] = useState(PartnersList)
	return(
		<div className="Partners Small_Banner">
			<Banner 
			BannerLogo={logo} 
            bannerdates="9-12 MAY 2022 • AMSTERDAM" 
            BannerTheme={Theme} />
		
			<div className="body_container">
				<div className="content_container">
					<div className="main_wrapper">
                        <h2>PARTNERS</h2>
						<div className="rowScn">
							{/* {
                                items.map((ParterProd, i) =>{
                                    return(
                                        <div className="col-3">
                                            <h3>{ParterProd.Title}</h3>
                                            <p>{ParterProd.Content}</p>
                                        </div>
                                    )
                                })
                            } */}

                            {
                                Object.keys(PartnersList).map((template_name, index) => {
                                    return (
                                        <div className="row" key={index}>
                                            <div className="col-12">
                                                <div className="pb_blk">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h3 className="sub_head">{template_name}</h3>
                                                        </div>
                                                        {
                                                            PartnersList[template_name].items.map((item, i) => {
                                                                return(
                                                                <div className="col-12 innerBx" key={i}>
                                                                    <div className="row">
                                                                    <div className="col-md-3">
                                                                    <div className="logo">
                                                                        <a href={item.ImgUrl} target={item.BlankTarget} rel="nofollow">
                                                                            <img src={item.ImgSrc} alt="esri" />
                                                                        </a>
                                                                    </div>
                                                                    </div>
                                                                        <div className="col-md-9">
                                                                            <h3 className="second_title">{item.Title}</h3>
                                                                            <p>{item.description}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>)
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
						</div>
                        
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners;