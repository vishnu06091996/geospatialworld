import React from 'react';
import './Home.css';
import TestimonialList from './TestimonialList'

const Testimonial = () =>{
    return(
        <>
            <div className="testimonial_container">
			    <div className="main_wrapper">
                    <div className="row">
                        <div className="col-12">
                            <h4>WHAT THE LEADERS SAY...</h4>
                            <h2>
                                IN-DEPTH DISCUSSIONS OF THE LATEST<br />
                                INDUSTRY INSIGHTS
                            </h2>
                        </div>
                    </div>
                    <TestimonialList />
                </div>
            </div>
        </>
    )
}

export default Testimonial;