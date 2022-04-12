import React, { useState } from "react";

const Form = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Phonenumber, setPhonenumber] = useState("");
    const [Workemail, setWorkemail] = useState("");
    const [Designation, setDesignation] = useState("");
    const [Organization, setOrganization] = useState("");
    const [Country, setCountry] = useState("");
    const [Question, setQuestion] = useState("");


    const [FirstNameErr, setFirstNameErr] = useState(false);
    const [LastNameErr, setLastNameErr] = useState(false);
    const [PhonenumberErr, setPhonenumberErr] = useState(false);
    const [WorkemailErr, setWorkemailErr] = useState(false);
    const [DesignationErr, setDesignationErr] = useState("");
    const [OrganizationErr, setOrganizationErr] = useState("");
    const [CountryErr, setCountryErr] = useState("");
    const [QuestionErr, setQuestionErr] = useState("");


    function loginHandle(e) { 
        if (FirstName.length < 3) { 
            setFirstNameErr(true);
        } else {
            setFirstNameErr(false);
        }

        if (LastName.length < 3) {
            setLastNameErr(true)
        } else { 
            setLastNameErr(false)
        }
        
        if (Phonenumber.length < 10) {
            setPhonenumberErr(true)
        } else {
            setPhonenumberErr(false)
        }
        if (Workemail.length < 3) {
            setWorkemailErr(true)
        } else { 
            setWorkemailErr(false)
        }

        if (Designation.length < 3) {
            setDesignationErr(true)
        } else {
            setDesignationErr(false)
        }

        if (Organization.length < 3) {
            setOrganizationErr(true)
        } else {
            setOrganizationErr(false)
        }

        if (Country.length < 3) {
            setCountryErr(true)
        } else {
            setCountryErr(false)
        }

        if (Question.length < 3) {
            setQuestionErr(true)
        } else {
            setQuestionErr(false)
        }

        e.preventDefault()
    }

    function FirstnameHandle(e) { 
        let item = e.target.value;
        if (item.length < 3) {
            setFirstNameErr(true);
        }
        else {
            setFirstNameErr(false);
        }
        setFirstName(item)
    }

    function LastnameHandle(e) { 
        const itemLast = e.target.value;
        if (itemLast.length < 3) {
            setLastNameErr(true)
        } else { 
            setLastNameErr(false)
        }
        setLastName(itemLast)
    }

    function WorkemailHandle(e) {
        const itemWorkemail = e.target.value;
        if (itemWorkemail.length < 3) {
            setWorkemailErr(true)
        } else { 
            setWorkemailErr(false)
        }
        setWorkemail(itemWorkemail)
    }
    
    function PhoneHandle(e) { 
        //const itemPhone = e.target.value;
        const itemPhone = e.target.value.replace(/\D/g, "");
        if (itemPhone.length < 10) {
            setPhonenumberErr(true)
        } else { 
            setPhonenumberErr(false)
        }
        setPhonenumber(itemPhone);
        //setPhonenumber(itemPhone) 
    }

    function DesignationHandle(e) { 
        const ItemDesignation = e.target.value;
        if (ItemDesignation.length < 3) {
            setDesignationErr(true);
        } else { 
            setDesignationErr(false);
        }
        setDesignation(ItemDesignation);
    }


    function OrganizationHandle(e) { 
        const ItemOrganization = e.target.value;
        if (ItemOrganization.length < 3) {
            setOrganizationErr(true)
        } else { 
            setOrganizationErr(false)
        }
        setOrganization(ItemOrganization);
    }
    
    function CountryHandle(e) { 
        const ItemCountry = e.target.value;
        if (ItemCountry.length < 3) {
            setCountryErr(true)
        } else { 
            setCountryErr(false)
        }
        setCountry(ItemCountry);
    }

    function QuestionHabdle(e) { 
        const ItemQuestion = e.target.value;
        if (ItemQuestion.length < 3) {
            setQuestionErr(true)
        } else { 
            setQuestionErr(false)
        }
        setQuestion(ItemQuestion)
    }
    return(
        <>
            <div className="form_blk">
                <h4>Please fill the form, one of our colleagues will reach you.</h4>
                <form onSubmit={loginHandle}>
                    <div className="forminner">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                onChange={FirstnameHandle} 
                            />{FirstNameErr ? <span className="error">First name is required</span>:""}
                        </div>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Last Name"
                                onChange={LastnameHandle}
                            />
                            {LastNameErr ? <span className="error">Last name is required</span>: "" }
                        </div>
                        <div className="form-group">
                            <input type="email"
                                className="form-control"
                                placeholder="Work E-mail"
                                onChange={WorkemailHandle}
                            />
                            {WorkemailErr ? <span className="error">E-mail id is required</span>: ""}
                        </div>
                        <div className="form-group">
                            <input
                                type="phone"
                                maxLength={10}
                                name="phone" 
                                value={Phonenumber}
                                className="form-control"
                                placeholder="Phone"
                                onChange={PhoneHandle}
                            />
                            {PhonenumberErr ? <span className="error">Phone number is required</span>: "" }
                        </div>



                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Designation"
                                onChange={DesignationHandle}
                            />
                            {DesignationErr ? <span className="error">Designation is required</span>: "" }
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Organization"
                                onChange={OrganizationHandle}
                            />
                            {OrganizationErr ? <span className="error">Organization is required</span> : ""}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Country"
                                onChange={CountryHandle}
                            />
                            {CountryErr ? <span className="error">Country is required</span> : ""}
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="Your Question"
                                className="form-control"
                                rows="4" onChange={QuestionHabdle}>
                            </textarea>
                            {QuestionErr ? <span className="error">Question is required</span> : ""}
                        </div>
                        <div className="form-group">
                            <label className="label_dv">
                                <input
                                    type="checkbox"
                                    //onChange={CheckbocHandle}
                                />
                                <div className="label_tx">I'd like to be informed of all upcoming geospatial activities organized by Geospatial Media and Communications</div>
                            </label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form_button">Submit</button>
                        </div>
                    </div>
                </form>
                
            </div>
        </>
    )
}

export default Form;