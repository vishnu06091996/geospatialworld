import React, { useState } from 'react';
import ConferencepartnersList from './ConferencepartnersList'

const Conferencepartners = () =>{

    const [Conferenc, serConferenc] = useState(ConferencepartnersList)


	return(
		<div className="partners_container">
			<div className="main_wrapper">
				<h2>Conference Partners</h2>
				<div className="row">
                    
                    {
                        Conferenc.map((items, i) =>{
                            return(
                                <div className="col-12">
                                    <div className="pc_com">
                                        <div className="top">
                                            <strong>{items.ConferenceName}</strong>
                                        </div>
                                        <div className="bottom">

                                            {
                                                items.ConferenceLogo.map((Subitems, index) =>{
                                                    return(
                                                        <a href={Subitems.UrlLogo} target="_blank" rel="nofollow">
                                                            <img src={Subitems.Srclogo} alt="esri" />
                                                        </a>
                                                    )
                                                })
                                            }

                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='col-md-6'>
                        <div class="pc_com">
                            <div class="top">
                                <strong>Co-host</strong>
                            </div>
                            <div class="bottom">
                                <a href="https://www.kadaster.nl/" target="_blank" rel="nofollow">
                                    <img alt="cyclomedia" src={require('.././../assets/images/kadaster.jpg')} />
                                </a>
                            </div>
						</div>
                    </div>
                    <div className='col-md-6'>
                        <div class="pc_com">
                            <div class="top">
                                <strong>Produced By</strong>
                            </div>
                            <div class="bottom">
                                <a href="https://www.geospatialworld.net/" target="_blank" rel="nofollow">
                                    <img alt="cyclomedia" src={require('.././../assets/images/gw-logo.jpg')} />
                                </a>
                            </div>
						</div>
                    </div>
				</div>
			</div>
		</div>
	)   
}

export default Conferencepartners;