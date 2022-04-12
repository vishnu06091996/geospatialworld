import React from 'react';

const NestedListMap = () =>{

    const dataItems = [
        {
            id:1, Title:"ENGAGE | ENVISION | INNOVATE", Content: [
                {
                    ImgUrl:"https://geospatialworldforum.org/images/a_slide7.jpg",
                    Subtitle:"WE ARE BACK SOONER THAN YOU THINK", 
                    Discription:"Geospatial World Forum (GWF) is the premium geospatial industry platform that connects professionals and leaders representing the entire geospatial ecosystem. Its collaborative and interactive nature has made GWF a ‘conference of conferences’, offering unique, unmissable experience to geospatial professionals worldwide."
                },
                {
                    ImgUrl:"https://geospatialworldforum.org/images/a_slide7.jpg",
                    Subtitle:"IN-DEPTH DISCUSSIONS OF THE LATEST INDUSTRY INSIGHTS", 
                    Discription:"Attended by the entire spectrum of the IT and geospatial community globally, GWF is the place to be seen, exhibit ground-breaking products and technologies, and make remarkable connections with senior decision-makers, thought leaders and innovators in the industry. GWF shall continue to facilitate collaborative engagement amongst communities, demonstrating collective and shared vision towards becoming an innovative industry."
                }
            ]
        },
        {
            id:2, Title:"ENGAGE | ENVISION | INNOVATE2", Content: [
                {
                    ImgUrl:"https://geospatialworldforum.org/images/a_slide7.jpg",
                    Subtitle:"WE ARE BACK SOONER THAN YOU THINK2", 
                    Discription:"Geospatial World Forum (GWF) is the premium geospatial industry platform that connects professionals and leaders representing the entire geospatial ecosystem. Its collaborative and interactive nature has made GWF a ‘conference of conferences’, offering unique, unmissable experience to geospatial professionals worldwide."
                },
                {
                    ImgUrl:"https://geospatialworldforum.org/images/a_slide7.jpg",
                    Subtitle:"IN-DEPTH DISCUSSIONS OF THE LATEST INDUSTRY INSIGHTS2", 
                    Discription:"Attended by the entire spectrum of the IT and geospatial community globally, GWF is the place to be seen, exhibit ground-breaking products and technologies, and make remarkable connections with senior decision-makers, thought leaders and innovators in the industry. GWF shall continue to facilitate collaborative engagement amongst communities, demonstrating collective and shared vision towards becoming an innovative industry."
                }
            ]
        }
    ]

    return(
        <div className='row'>
            {
                dataItems.map((items, i) =>{
                    return(
                        <div className='col-12 RepeatBox' key={i}>
                            <div className='col-12 text-center mt-5 mb-4'>
                                <h1>{items.Title}</h1>
                            </div>
                            {
                                items.Content.map((SubItems, subI) =>{
                                    return(
                                        <div className='row mt-3 mb-3' key={subI}>
                                            <div className='col-4'>
                                                <img src={SubItems.ImgUrl} className="w-100" />
                                            </div>
                                            <div className='col-8'>
                                                <h3>{SubItems.Subtitle}</h3>
                                                <p>{SubItems.Discription}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default NestedListMap;