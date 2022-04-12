import React from "react";

import Banner from '.././../include/Banner';

import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';
import { useParams } from "react-router-dom";
import ProgramList from './ProgramList';

const ProgramDetail = () => {
    return (
        <div className="Small_Banner ProgramDetail">
            <Banner
                BannerLogo={logo}
                bannerdates="9-12 MAY 2022 • AMSTERDAM"
                BannerTheme={Theme} />
            <div className="body_container">
                <div className="content_container">
                    <div className="main_wrapper">
                        Detals
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramDetail;
