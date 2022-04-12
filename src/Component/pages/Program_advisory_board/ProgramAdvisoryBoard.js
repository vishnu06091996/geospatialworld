import React, {useEffect, useState} from "react";
import './style.css'
import Banner from '.././../include/Banner';


import logo from ".././../assets/images/logo.png";
import Theme from '.././../assets/images/theme.png';
import ProgramAdvisoryBoardData from "./ProgramAdvisoryBoardData";
import { Link } from "react-router-dom";

const ProgramAdvisoryBoard = () => {

  const [data, setData] = useState(ProgramAdvisoryBoardData)

    useEffect(() =>{
		window.scrollTo(0, 0);
	}, []);

  const [Modal, SetModal] = useState(false);

  
  const [PopImgSrc, SetPopImgSrc] = useState('');
  const [PopTitle, SetPopTitle] = useState('');
  const [PopDesignation, SetPopDesignation] = useState('');
  const [PopContent, SetPopContent] = useState('');

  const GetPath = (ImgSrc, Title, Designation, Content) =>{
    SetPopImgSrc(ImgSrc);
    SetPopTitle(Title)
    SetPopDesignation(Designation);
    SetPopContent(Content);
    SetModal(true)
  }

//   const productsTEst = productsData.map((product) => {
//     return (
//       <div key={product.id}>
//         <h3>
//           <Link to={`/Products/${product.id}`}>{product.name}</Link>
//         </h3>
//         <p>Price: ${product.price}</p>
//         <hr />
//       </div>
//     );
//   });

  return (
    <>
     <div className={Modal ? "Model Open" : "Model"} >
        <div className="ModelScroll">
            <div className="ModelIN">
              <div className="closeMode" onClick={() => SetModal(false)}>X</div>
              <div className="pic">
                <img src={PopImgSrc} alt="" className="w-100" />
              </div>
              <div className="info">
                <h3>{PopTitle}</h3>
                <p>{PopDesignation}</p>
                <p>{PopContent}</p>
              </div>
            </div>
        </div>
      </div>

      <div className="ProgramAdvisoryBoard Small_Banner">
			<Banner 
			BannerLogo={logo}
			bannerdates="9-12 MAY 2022 • AMSTERDAM"
			BannerTheme={Theme} />

            <div className="body_container">
                <div className="content_container">
                    <div className="main_wrapper">
                        <h2>PROGRAM ADVISORY BOARD</h2>
                        <div className="row">
                          
                          {
                            data.map((Items, i) =>{
                              return(
                                <div className="col-md-4 col-sm-6" key={i}>
                                  <div className="pab_blk" onClick={() => GetPath(Items.ImgSrc, Items.Title, Items.Designation, Items.Content)}>
                                    <div className="pic">
                                      <img src={Items.ImgSrc} alt="" className="w-100" />
                                    </div>
                                    <div className="info">
                                      <h3>{Items.Title}</h3>
                                      <p>{Items.Designation}</p>
                                      {/* <p>{Items.Content}</p> */}
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
        </div>

       
    </>
  );
};

export default ProgramAdvisoryBoard;
