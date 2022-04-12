import React from 'react';
import './Awardcategories.css'

const Awardcategories = (props) =>{
    return(
        <>
            <div className="Award_Cate">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-transform">{props.AwardHeading}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-12 col-lg-4 text-center">
                        <div className="award_cate">
                            <strong>{props.AwardApplication}</strong>
                            <span>{props.AwardApplicationText}</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 text-center">
                        <div className="award_cate">
                            <strong>{props.AwardTechnology}</strong>
                            <span>{props.AwardTechnologyText}</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 text-center">
                        <div className="award_cate">
                            <strong>{props.AwardPolicy}</strong>
                            <span>{props.AwardPolicyText}</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Awardcategories;