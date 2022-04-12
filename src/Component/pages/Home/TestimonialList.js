import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialList = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const TestimonialItems =[
        {
            id:1, 
            Content:"“We have transformed from handwork processes to an automated process, to data processes and data knowledge, and further, we have to transform up in the value chain. Even with the new technologies like AI/ML coming up, we have to improve the governance in checks and balances to give better services to citizens”",
            ImgSrc:"images/Frank-Tierolff.jpg",
            Title:"FRANK TIEROLFF",
            Designation:"CEO KADASTER"
        },
        {
            id:2, 
            Content:"“We are in an era of open data. People are concerned about where data is coming from. This is also a challenge. How do we keep geospatial data relevant in fast-changing time”",
            ImgSrc:"images/Lea-Bodossian.jpg",
            Title:"LEA BODOSSIAN",
            Designation:"SECRETARY GENERAL AND EXECUTIVE DIRECTOR, EUROGEOGRAPHICS"
        },
        {
            id:3, 
            Content:"“We have to change our priorities and we need to shift those very quickly and we need to begin action now. This really means to apply our best science, our best technology, and bring what got us to this point, that is, human creativity and not just the digital representation of that. To do this, geography and geographic thinking are essential”",
            ImgSrc:"images/Dean-Angelides.jpg",
            Title:"DEAN ANGELIDES",
            Designation:"CORPORATE DIRECTOR INTERNATIONAL, ESRI"
        },
        {
            id:4, 
            Content:"“We in GEO firmly believe that Earth Observations have no borders, and we need a coalition of the willing governments and partners, who would come together and take a similar approach of transboundary, transdisciplinary and trans-sectoral to work collectively, to mobilize action to bring Earth Observation to the forefront of decision making”",
            ImgSrc:"images/Yana.jpg",
            Title:"YANA GEVORGYAN",
            Designation:"DIRECTOR, GEO SECRETARIAT"
        },
        {
            id:5, 
            Content:"“Integration is, of course, one of the powerful elements of geospatial information. As we saw, there are these layers of information that we can put together on a geographical basis. I think, working with that integration element is very powerful to address the problems that we face. One of the things that is happening right now is we are pushing from data and information to knowledge and the next step is, obviously, from knowledge to action”",
            ImgSrc:"images/Stefan-Schweinfest.jpg",
            Title:"STEFAN SCHWEINFEST",
            Designation:"DIRECTOR, STATISTICS DIVISION, UNITED NATIONS"
        },
        {
            id:6, 
            Content:"“Geospatial technology is important for societal benefit, the recent COVID-19 is an example of it; however, our privacy and misuse of data also need attention and a cautious approach”",
            ImgSrc:"images/Robert-Cardillo.jpg",
            Title:"ROBERT CARDILLO",
            Designation:"CHAIRMAN, THE UNITED STATES GEOSPATIAL INTELLIGENCE FOUNDATION (USGIF)"
        },
        {
            id:7, 
            Content:"“We need geospatial infrastructure, geospatial knowledge infrastructure, and Digital Twins to address our nation’s key challenges, including the impact of climate change; energy transition; agriculture transition; housing construction; and replacement infrastructure. The geospatial strategy is crucial for our vital infrastructure”",
            ImgSrc:"images/Rob-van-de-Velde.jpg",
            Title:"ROB VAN DE VELDE",
            Designation:"DIRECTOR, GEONOVUM"
        },
        {
            id:8, 
            Content:"“There is a large amount of data coming from different sources; we need to fully utilize that data and search for newer application areas. Collaboration between academia, industry, and the government has to increase - new entrants from R&D/academia or startups should be encouraged”",
            ImgSrc:"images/col-ali-al-shehi.jpg",
            Title:"BRIG. ALI AL SHEHHI",
            Designation:"FORMER DIRECTOR, SPACE RECONNAISSANCE CENTRE, BOARD MEMBER, FEDERAL GIS CENTER, UAE"
        }
    ]

    return(
        <div className="testimonials">
            <Slider {...settings}>
                {
                    TestimonialItems.map((items, index) =>{
                        return(
                            <div className="t_blk" key={index}>
                                <div className="info">
                                    <p>{items.Content}</p>
                                </div>
                                <div className="designation">
                                    <div className="pic">
                                        <img src={items.ImgSrc} alt="" className='w-100' />
                                    </div>
                                    <div className="name">
                                        <strong>{items.Title}</strong>
                                        <span>{items.Designation}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default TestimonialList;
