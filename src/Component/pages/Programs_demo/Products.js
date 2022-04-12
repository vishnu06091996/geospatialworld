
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';


import Banner from '.././../include/Banner';
import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';
import Ddata from './ProductsApi'

const Products = () => {
  const [data, setData] = useState(Ddata)
  const navigate = useNavigate();


  return (
    <>
      <div className="contact Small_Banner">
        <Banner
          BannerLogo={logo}
          bannerdates="9-12 MAY 2022 • AMSTERDAM"
          BannerTheme={Theme} />

        <div className="body_container">
          <div className="content_container">
            <div className="main_wrapper">
              <h2>PROGRAMS List</h2>
              <div className="row">
                {/* {data.map((item, index) => (
                  <div className="col-md-3 mb-5" key={index}>
                    <button type="button" className="btn btn-info" onClick={() => navigate("/ProductDetail", {
                      state: item,
                    })} >{item.name }</button>
                  </div>
                ))} */}

                {data.map((item, index) => (
                  <div className="col-md-3 mb-5" key={index}>
                    <button type="button" className="btn btn-info" onClick={() => navigate("/ProductDetail", {
                      state: item,
                    })} >{item.Title}</button>
                  </div>

                ))}
                
              </div>

              {
                data.map((item, i) => {
                  return (
                    <div className="row align-items-center" key={i}>
                      <div className="col-12">
                        <div className="proBorder">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="com_blk Pro_blk">
                                <strong>{item.Title}</strong>
                                <button className="btn btn-info" onClick={() => navigate("/ProductDetail", { state: item, })}>{item.Title}</button>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="ProLogodv">

                                {
                                  item.Contect.map((Subitems, index) => {
                                    return (
                                      <div className="ProLogoBX" key={index}>
                                        <div className="ProLogoBX_in" onClick={() => navigate("/ProductDetail", {state:item})}>
                                          <span className="ProLogo"><img src={Subitems.ImgSrc} /></span>
                                          <p className="ProLogoTx">{Subitems.ItemName}</p>
                                        </div>
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
    </>
  );
};

export default Products;
