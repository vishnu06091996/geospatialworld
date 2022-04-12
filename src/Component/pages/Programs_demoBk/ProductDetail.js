import React from "react";
import Banner from '.././../include/Banner';


import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';

import { useParams } from "react-router-dom";
import productsData from "./productsData";

function ProductDetail() {
	
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);

  return (
        <div className="contact Small_Banner">
            <Banner 
            BannerLogo={logo}
            bannerdates="9-12 MAY 2022 • AMSTERDAM"
            BannerTheme={Theme} />

            <div className="body_container">
                <div className="content_container">
                    <div className="main_wrapper">
                        <h2>{thisProduct.name}</h2>
                        <p>Price: ${thisProduct.price}</p>
                        <p>{thisProduct.description}</p>
                    </div>
                </div>

            </div>
        </div>
  );
}

export default ProductDetail;
