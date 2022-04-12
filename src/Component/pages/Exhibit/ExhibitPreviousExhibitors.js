import React from "react";

const ExhibitPreviousExhibitors = () =>{
    
    const ExhibitPreviousExhibitorsLogo = [
        {id:1, ImgSrc:"images/ImgLogo1.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:2, ImgSrc:"images/ImgLogo2.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:3, ImgSrc:"images/ImgLogo3.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:4, ImgSrc:"images/ImgLogo4.jpg", LogoLonk:"https://www.aw3d.jp/en/", Target:"_blank"},
        {id:5, ImgSrc:"images/ImgLogo5.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:6, ImgSrc:"images/ImgLogo6.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:7, ImgSrc:"images/ImgLogo7.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:8, ImgSrc:"images/ImgLogo8.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:9, ImgSrc:"images/ImgLogo9.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:10, ImgSrc:"images/ImgLogo10.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:11, ImgSrc:"images/ImgLogo11.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:12, ImgSrc:"images/ImgLogo12.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:13, ImgSrc:"images/ImgLogo13.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:14, ImgSrc:"images/ImgLogo14.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:15, ImgSrc:"images/ImgLogo15.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:16, ImgSrc:"images/ImgLogo16.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:17, ImgSrc:"images/ImgLogo17.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:18, ImgSrc:"images/ImgLogo18.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:19, ImgSrc:"images/ImgLogo19.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:20, ImgSrc:"images/ImgLogo20.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:21, ImgSrc:"images/ImgLogo21.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:22, ImgSrc:"images/ImgLogo22.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:23, ImgSrc:"images/ImgLogo23.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:24, ImgSrc:"images/ImgLogo24.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:25, ImgSrc:"images/ImgLogo25.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:26, ImgSrc:"images/ImgLogo26.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:27, ImgSrc:"images/ImgLogo27.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:28, ImgSrc:"images/ImgLogo28.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:29, ImgSrc:"images/ImgLogo29.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:30, ImgSrc:"images/ImgLogo30.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:31, ImgSrc:"images/ImgLogo31.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:32, ImgSrc:"images/ImgLogo32.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:33, ImgSrc:"images/ImgLogo33.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:34, ImgSrc:"images/ImgLogo34.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:35, ImgSrc:"images/ImgLogo35.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:36, ImgSrc:"images/ImgLogo36.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:37, ImgSrc:"images/ImgLogo37.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:38, ImgSrc:"images/ImgLogo38.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:39, ImgSrc:"images/ImgLogo39.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
        {id:40, ImgSrc:"images/ImgLogo40.jpg", LogoLonk:"javascript:void(0)", Target:"_self"},
    ]

	return(
		<>
            <div className="ExhibitPreviousExhibitors">
                <div className="row">
                    <div className="col-12">
                        <h2>Previous Exhibitors</h2>
                    </div>
                    {
                        ExhibitPreviousExhibitorsLogo.map((items, i) =>{
                            return(
                                <div className="col-md-3 col-sm-4 col-lg-3 col-xl-3 mb-3 pb-2">
                                    <div class="ep_logo">
                                        <a target={items.Target} href={items.LogoLonk}>
                                            <img alt="21AT" src={items.ImgSrc} />
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
	)
}

export default ExhibitPreviousExhibitors;