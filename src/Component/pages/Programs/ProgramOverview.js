import React, { useState, useEffect } from "react";
import Banner from '.././../include/Banner';
import './Program.css'

import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';

import ProgramList from './ProgramList';
import { Link } from 'react-router-dom';

const ProgramOverview = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [ListElem, setListElem] = useState(ProgramList)

    return (
        <div className="contact Small_Banner">
            <Banner
                BannerLogo={logo}
                bannerdates="9-12 MAY 2022 • AMSTERDAM"
                BannerTheme={Theme} />

            <div className="body_container">
                <div className="content_container">
                    <div className="main_wrapper">
                        <h2>PROGRAMS</h2>
                        {
                            ListElem.map((items, i) => {
                                return (
                                    <div className="row align-items-center" key={i}>
                                        <div className="col-12">
                                            <div className="proBorder">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="com_blk Pro_blk">
                                                            <strong>{items.Title}</strong>
                                                            {/* <Link to={`/ProgramOverview/${items.id}`}>{items.Title}</Link> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="ProLogodv">

                                                            {
                                                                items.Contect.map((Subitems, index) => {
                                                                    return (
                                                                        <div className="ProLogoBX" key={index}>
                                                                            {/* <Link to={`/ProgramOverview/${Subitems.Title}`} className="ProLogoBX_in">
                                                                                <span className="ProLogo"><img src={Subitems.ImgSrc} /></span>
                                                                                <p className="ProLogoTx">{Subitems.Name}</p>
                                                                            </Link> */}
                                                                            <a className="ProLogoBX_in">
                                                                                <span className="ProLogo"><img src={Subitems.ImgSrc} /></span>
                                                                                <p className="ProLogoTx">{Subitems.Name}</p>
                                                                            </a>
                                                                        </div>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProgramOverview;

