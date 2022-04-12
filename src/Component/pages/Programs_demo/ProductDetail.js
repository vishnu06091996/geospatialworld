import React, { useState } from "react";
import Banner from '.././../include/Banner';
import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';

import { useLocation, Link } from 'react-router-dom'


const ProductDetail = () => { 
    const location = useLocation()
    const title = location.state.Title;
    const contect = location.state.Contect;
    const itemname = location.state.ItemName;
    const paragraph = location.state.paragraph;
    
    return (
        <>
            <div className="contact Small_Banner">
                <Banner
                    BannerLogo={logo}
                    bannerdates="9-12 MAY 2022 • AMSTERDAM"
                    BannerTheme={Theme} />

                <div className="body_container">
                    <div className="content_container">
                        <div className="main_wrapper">
                            <div className="backBTN mb-5"><Link to="/Products" className="btn btn-info">Back</Link></div>

                            <div className="row">
                                <div className="col-md-4">
                                    {/* <span><img src={image} className="w-100" /></span> */}
                                </div>
                                <div className="col-md-8">
                                    <h2>{title}</h2>
                                    <p>{itemname}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default ProductDetail;
