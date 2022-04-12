import React from "react";
import KeytopicsItems from './KeytopicsItems';
import Few_Think_To_Keep_Mind from './include/Few_Think_To_Keep_Mind';
import ImportantDate from './include/ImportantDate';

const Keytopics = ()=>{
	return(
		<div className="Keytopics">
			<div className="keyTopicsbx">
				<div className="row">
					<div className="col-12">
						<h3>KEY TOPICS FOR #GWF2022 INCLUDE:</h3>
					</div>
				</div>

				<div className="row">
					<KeytopicsItems  />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<p><b style={{fontWeight:"700", textAlign:"right", display:"block"}}>… others</b></p>
				</div>
			</div>
		
			<Few_Think_To_Keep_Mind />
			<ImportantDate 
				Heading={"IMPORTANT DATES"} 
				Abstract={"Abstract Submission"} 
				AbstractDate={"10 February 2022"} 
				Acceptance={"Acceptance Notification"} 
				AcceptanceDate={"20 February 2022 "} 
				Speakers={"Speakers Registration "} 
				SpeakersDate={"01 March 2022"} />
		
			<div class="onerow">
				<div className="col12">
					<div className="btn_blk">
						<a href="https://www.surveymonkey.com/r/GWF2022CFS" target="_blank">
							SUBMIT YOUR INTEREST TO SPEAK
						</a>
						<small>Deadline: 10 February 2022</small>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Keytopics;