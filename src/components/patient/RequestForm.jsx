import React,{useState}from "react";
import options,{bloodgroup} from "../bloodCamp/option";

function RequestBlood() {

    const [state, setState] = useState("");
    const [districts, setDistrict] = useState("");
    const [blood,setBlood] = useState("");

    const handleState = (e) => {
        const value = e.target.value;
        setState(value);
    }
    const handleDistrict = (e) => {
        const value = e.target.value;
        setDistrict(value);
    } 
    const handleBlood = (e) => {
        const value = e.target.value;
        setBlood(value);
    }   

    return (
        <div className="br-container">
            <div className="br-heading"><h1>SEND REQUEST</h1></div>
            <form action="">
                <div className="br-form">
                    <div className="br-sub-container">
                        <h2>Patient Details</h2>
                        <div className="br-sub-container-field">
                            <label for="name">Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="age">Age<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="gender">Gender<span class="required-field"></span></label>
                            <br></br>
                            <select placeholder="Gender" name="gender">
                                <option value="" selected disabled>Select Gender<span class="required-field"></span></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="trans">Transgender</option>
                            </select>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="bloodgrp">Blood Group<span class="required-field"></span></label>
                            <br></br>
                            <select name="blood" onChange={handleBlood} required>
                                <option value="" selected disabled>Select Blood Group</option>
                                {bloodgroup.map((item) => {
                                    return <option value={item}>{item}</option>
                                    {/* console.log(item.label); */ }
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="br-sub-container">
                        <h2>Contact Details</h2>
                        <div className="br-sub-container-field">
                            <label for="contact-name">Contact person name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="contact-name-rel">Relation with person<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="contact-num">Contact Number<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="request-user-email">Email</label>
                            <br></br>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="br-sub-container">
                        <h2>Residence Details</h2>
                        <div className="br-sub-container-field">
                            <label for="address">Address<span class="required-field"></span></label>
                            <br></br>
                            <textarea required></textarea>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="treatment">Treatment for?<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="remark">Remarks</label>
                            <br></br>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="br-sub-container">
                        <h2>Hospital</h2>
                        <div className="br-sub-container-field">
                            <label for="state">State<span class="required-field"></span></label>
                            <br></br>
                            <select name="State" onChange={handleState} required>
                                <option value="" selected disabled>Select State</option>
                                {options.map((item) => {
                                    return <option value={item.label}>{item.label}</option>
                                    {/* console.log(item.label); */ }
                                })}
                            </select>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="district">District<span class="required-field"></span></label>
                            <br></br>
                            <select name="District" onChange={handleDistrict} required>
                                <option value="" selected disabled>Select District</option>
                                {options.map((item) => {
                                    if (item.label === state) {
                                        return item.district.map((itemDis) => {
                                            return <option value={itemDis}>{itemDis}</option>
                                            {/* console.log(itemDis); */ }
                                        })
                                    }
                                })}
                            </select>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="city">City<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="hospital">Hospital<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" required></input>
                        </div>
                    </div>
                </div>
                <div className="br-form-submit">
                    <button type="submit">Send Request</button>
                </div>
            </form>
        </div>
    )
}

export default RequestBlood;