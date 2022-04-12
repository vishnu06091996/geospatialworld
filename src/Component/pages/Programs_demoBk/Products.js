import React, { useEffect } from "react";
import Banner from '.././../include/Banner';


import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const productsTEst = productsData.map((product) => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/Products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

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
              <h2>PROGRAMS dd</h2>
              {productsTEst}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Products;
