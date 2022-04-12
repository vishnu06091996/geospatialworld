import React, { useState } from 'react';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import './Excellenceawards2020.css'

const Excellenceawards2020Items = (props) =>{
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
 

    return(
        <>
            <div className='Excellenceawards2020Items'>
                <div className="row">
                    <div className="col-12">
                        <h2>{props.awardHeading}</h2>
                        <div className='excelSlider'>
                        {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
                            <div class='item'>
                                <h4>1</h4>
                            </div>
                            <div class='item'>
                                <h4>2</h4>
                            </div>
                        </OwlCarousel>;   */}
                            <Slider {...settings}>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_1.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_2.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_3.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_4.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_5.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_6.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_7.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_8.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_9.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_10.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_11.jpg')} className="w-100" />
                                </div>
                                <div className="pic">
                                    <img src={require ('../.././../assets/images/p_12.jpg')} className="w-100" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Excellenceawards2020Items;