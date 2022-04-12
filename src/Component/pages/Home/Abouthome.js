import React from 'react';
import './Home.css';
import AbouthomeSlider from './AbouthomeSlider';
import AbouthomeContent from './AbouthomeContent';

const Abouthome = () =>{
    return(
        <>
            <div className="about_container">
                <div className="main_wrapper">
                
                    <div className="row">
                        <AbouthomeSlider />
                        <AbouthomeContent />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Abouthome;