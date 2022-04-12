import React, {useEffect} from "react";
import Banner from './../include/Banner';
import './Venue.css'

import logo from "./../assets/images/logo.png";
import Theme from './../assets/images/theme.png';

const Venue = () =>{
    useEffect(() =>{
		window.scrollTo(0, 0);
	}, [])
    return(
        <div className="venue_scn Small_Banner">
			<Banner 
			BannerLogo={logo}
			bannerdates="9-12 MAY 2022 • AMSTERDAM"
			BannerTheme={Theme} />

            <div className="body_container">
                <div className="content_container">
                    <div className="main_wrapper">
                        
                        <div className="row">
                            <div className="col-12">
                                <h2 className="hd_2 border-none pb-0">VENUE</h2>
                                <p><b>TAETS ART AND EVENT PARK<br />AMSTERDAM – ZNSTD<br />Hemkade 18 (Hembrugterrein)<br />1506 PR Amsterdam – Zaandam<br />The Netherlands</b></p>
                                <p className="map_link"><a href="https://goo.gl/maps/7CoigyU4pdsXB1pM6" target="_blank"> https://goo.gl/maps/7CoigyU4pdsXB1pM6 </a></p>
                                <p>GWF 2022 will be hosted in a unique conference venue located on the magnificently beautiful national heritage site at the Amsterdam North Sea Canal. The buildings of Taets are part of the industrial heritage on the Hembrug terrain, a monumental industrial terrain dating from 1897. The terrain has grown into a creative hotbed, to which craftsmanship and sustainability are central. On the Hembrug terrain, you can eat and drink, shop, visit a museum or take a look at the craftsmen studios. We look forward to hosting you in this spectacular industrial and historic venue!</p>
                                
                            </div>
                        </div>
                        
                        <div className="row accessibilityscn">
                            <div className="col-12">
                                <p className="pb-1"><b>Please note, the venue is not disabled-friendly. You may write to us for any assistance.</b></p>
                                <h3>ACCESSIBILITY TO THE VENUE</h3>
                                <ul className="things venue_Ul">
                                    <li>Taets Art and Event Park is a venue situated in three extremely wonderful national monuments, Building 41 | Gallery &amp; Theatre, Building 43 | Event Area &amp; Meeting area and Hall 1 | Black Box.</li>
                                    <li>These beautiful buildings are located next to the North Sea Canal near Amsterdam. Although the terrain's character and its direct surroundings refer to days long gone, the location is fitted with all modern conveniences.</li>
                                    <li>A high-speed train connects Zaandam and Schiphol (Amsterdam) Airport. It takes only 22 minutes to get from the airport to Zaandam.</li>
                                    <li>A large number of open air parking facility is available in the venue free of cost.</li>
                                    <li>Transportation within the city by bus connecting to various train, tram, subway, (green) taxi, water taxi or bike taxi.</li>
                                    <li>Shuttle will be available from Zaandam station to venue</li> 
                                </ul>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                                <h3>By Public Transport</h3>
                                <p className="pb-1">You may use Google maps or following link to get the information of public transport to reach to the convention center:</p>
                                <p className="map_link"><a href="https://moovitapp.com/index/en/public_transit-Taets_Art_Event_Park-Netherlands-site_40683143-101" target="_blank"> https://moovitapp.com/index/en/public_transit-Taets_Art_Event_Park-Netherlands-site_40683143-101</a></p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                                <h3>By Car</h3>
                                <p>From Amsterdam <br /> Ring A10, direction Zaanstad<br /> Exit Oostzaan, Zaandam-Zuid, Het Twiske <br /> Turn right onto N516 / Kolkweg, direction Kolkweg-Noord, Zaandam-Zuid <br /> After 3 kilometers (after the Den Uyl bridge) turn left to the N203 / Provincial road <br /> Turn left after 250 meters (at the roundabout) <br /> Follow the road and signs to Taets Art and Event Park</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                                <h3>Shuttle Services</h3>
                                <p>Shuttles will be available on a regular interval from Houtveldweg Bus Stop (near Zaandam Train Station) to Taets Art and Event Park and back. The schedule will be available online near to the conference.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Venue;

