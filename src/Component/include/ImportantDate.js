import React from 'react';

const ImportantDate = (props) =>{
    return(
        <>
            <div className="speakerAbout">
				<div className="row">
					<div className="col-12">
						<h3 className="text-center">{props.Heading}</h3>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<div className="imp_date">
							<span> {props.Abstract}</span>
							<strong> {props.AbstractDate}</strong>
						</div>
					</div>

					<div className="col-md-4">
						<div className="imp_date">
							<span>{props.Acceptance}</span>
							<strong> {props.AcceptanceDate}</strong>
						</div>
					</div>

					<div className="col-md-4">
						<div className="imp_date">
							<span>{props.Speakers}</span>
							<strong> {props.SpeakersDate}</strong>
						</div>
					</div>

				</div>
			</div>
        </>
    )
}

export default ImportantDate;