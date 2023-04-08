import React, { useState } from "react";
import options from "./option"

function CampSchedule() {

    const [state, setState] = useState("");
    const [districts, setDistrict] = useState("");
    const [city,setCity] = useState("");

    const handleState = (e) => {
        const value = e.target.value;
        setState(value);
    }
    const handleDistrict = (e) => {
        const value = e.target.value;
        setDistrict(value);
    }

    return (
        <div className="camp-container">
            <img className="below-nav-img" src="images/belownavimg.webp"></img>
            <div className="search-container">
                <h1 style={{color :"#b11717"}}>Camp Schedule</h1>
                <form action="" className="camp-search-form">
                    <div className="camp-subFields">
                        <label htmlFor="state">State<span class="required-field"></span></label>
                        {/* <br></br> */}
                        <select name="State" onChange={{handleState}} required>
                            <option value="" selected disabled>Select State</option>
                            {options.map((item) => {
                                return <option value={item.label}>{item.label}</option>
                                {/* console.log(item.label); */ }
                            })}
                        </select>

                    </div>
                    <div>
                        <label htmlFor="district">District<span class="required-field"></span></label>
                        {/* <br></br> */}
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
                    
                    <div className="camp-subFields">
                        <label htmlFor="state">City</label>
                        <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="Optional"></input>
                    </div>
                    <div className="camp-subFields">
                        <label htmlFor="state">Camp Date<span class="required-field"></span></label>
                        <div className="camp-subFields-date">
                            <input type="date" placeholder="select date" required></input>
                        </div>
                    </div>
                </form>
                <div className="camp-submit">
                    <button type="submit">Search</button>
                </div>

            </div>
        </div>

    )
}

export default CampSchedule;