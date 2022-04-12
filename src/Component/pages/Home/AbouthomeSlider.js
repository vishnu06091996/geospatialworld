import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AbouthomeSlider = () =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <>
            <div className="col-6">
               
                <Slider {...settings}>
                    <div>
                        <img src={require('.././../assets/images/a_slide2.jpg')} alt="" className='w-100' />
                    </div>
                    <div>
                        <img src={require('.././../assets/images/a_slide3.jpg')} alt="" className='w-100' />
                    </div>
                    <div>
                        <img src={require('.././../assets/images/a_slide4.jpg')} alt="" className='w-100' />
                    </div>
                    <div>
                        <img src={require('.././../assets/images/a_slide5.jpg')} alt="" className='w-100' />
                    </div>
                    <div>
                        <img src={require('.././../assets/images/a_slide6.jpg')} alt="" className='w-100' />
                    </div>
                    <div>
                        <img src={require('.././../assets/images/a_slide7.jpg')} alt="" className='w-100' />
                    </div>
                </Slider>
                
            </div>
        </>
    )
}

export default AbouthomeSlider;