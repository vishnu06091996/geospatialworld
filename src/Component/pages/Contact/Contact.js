import React, {useEffect} from "react";
import Banner from '.././../include/Banner';
import Form from '.././../include/Form';

import './Contact.css'

import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';

const Contact = () =>{
    useEffect(() =>{
		window.scrollTo(0, 0);
	}, [])
    return(
        <div className="contact Small_Banner">
			<Banner 
			BannerLogo={logo}
			bannerdates="9-12 MAY 2022 • AMSTERDAM"
			BannerTheme={Theme} />

            <div className="body_container">
                <div className="content_container">
                    <div className="main_wrapper">
                        
                        <div className="row">
                            <div className="col-md-7 col-sm-12">
                                <h2 className="hd_2 border-none pb-0">Contacts</h2>
                                <div className="con_info">
                                    <h3>General Information &amp; Speaking Opportunities</h3>
                                    <span>Sarah Hisham</span>
                                    <a href="mailto:sarah@geospatialworld.net">
                                        sarah@geospatialworld.net
                                    </a>
                                </div>
                                
                                <div className="con_info">
                                    <strong>Sponsorship &amp; Exhibition</strong>
                                    <div className="con_infoIn">
                                        <div className="com">
                                            <p>Europe</p>
                                            <span>Remko Lugten</span>
                                            <a href="mailto:remko@geospatialworld.net">remko@geospatialworld.net</a>
                                        </div>
                                        <div className="com">
                                            <p>Americas</p>
                                            <span>AARON ADDISON</span>
                                            <a href="mailto:aaron@geospatialworld.net">aaron@geospatialworld.net</a>
                                        </div>
                                        <div className="com">
                                            <p>South Asia, Middle East  &amp; Africa</p>
                                            <span>Abhishek Kotangale</span>
                                            <a href="mailto:abhishek@geospatialworld.net">abhishek@geospatialworld.net</a>
                                        </div>
                                        <div className="com">
                                            <p>Asia Pacific</p>
                                            <span>Vaishali Dixit</span>
                                            <a href="mailto:vaishali@geospatialworld.net">vaishali@geospatialworld.net</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="con_info">
                                    <strong>REGISTRATION</strong>
                                    <span>HARENDRA RAWAT</span>
                                    <a href="mailto:registration@geospatialworldforum.org">registration@geospatialworldforum.org</a>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <Form />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;

