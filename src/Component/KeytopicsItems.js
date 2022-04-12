import React from 'react';

const KeytopicsItems = (props) =>{
	
	const KeytopicsItemsList = [
		{discription: "National Mapping & Space"},
		{discription: "Cities"},
		{discription: "Land Administration"},
		{discription: "Location & Business Intelligence"},
		{discription: "Agriculture"},
		{discription: "Public Health"},
		{discription: "Water"},
		{discription: "AI"},
		{discription: "Automation & Robotics"},
		{discription: "UAV"},
		{discription: "SAR"},
		{discription: "HD Mapping"},
		{discription: "Data Governance"},
		{discription: "Ethics"},
		{discription: "Open Data"},
		{discription: "Diversity & Inclusivity"},
		{discription: "Geospatial Knowledge Infrastructure"}
	]
	
	return(
		<>
			{KeytopicsItemsList.map((item, i) => 
			 <div className="col-md-4 mb-4" key={i}>
				<div className="com_blk">
					<strong >{item.discription}</strong>
				</div>
			</div>
			 )
			}
		</>
	)
}

export default KeytopicsItems;