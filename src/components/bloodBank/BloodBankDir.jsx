import React, { useState } from "react";
import options from "../bloodCamp/option";
import Table from "../layout/Table"

const bloodbank = [
    { name: "abs", address: "andlvlal", phone: "8746544465", email: "kbafkj@gmial.com" },
    { name: "adgv", address: "andlvlal", phone: "8746544465", email: "kbafkj@gmial.com" },
    { name: "adbabab", address: "andlvlal", phone: "8746544465", email: "kbafkj@gmial.com" },
    { name: "sfbsbns", address: "andlvlal", phone: "8746544465", email: "kbafkj@gmial.com" },
    { name: "sfnbfxgz", address: "andlvlal", phone: "8746544465", email: "kbafkj@gmial.com" },
]
const headBloodbank = [
    { name: "Name", address: "Address", phone: "Contact No", email: "Email Id" }
]

function BloodBankDir() {
    const [state, setState] = useState("");
    const [districts, setDistrict] = useState("");
    const [blood, setBlood] = useState("");
    const [showTable,setShowTable] = useState(false);

    const handleSearchClick = () =>{
        setShowTable(true);
    }
    
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
        <div className="camp-container">
            <img className="below-nav-img" src="images/belownavimg.webp"></img>
            <div className="search-container">
                <h1 style={{ color: "#b11717" }}>Search Nearest Blood Bank</h1>
                <form action="" className="camp-search-form">
                    <div className="camp-subFields">
                        <label htmlFor="state">State<span class="required-field"></span></label>
                        {/* <br></br> */}
                        <select name="State" onChange={handleState} required>
                            <option value="" selected disabled>Select State</option>
                            {options.map((item) => {
                                return <option value={item.label}>{item.label}</option>
                                {/* console.log(item.label); */ }
                            })}
                        </select>

                    </div>
                    <div>
                        <label htmlFor="district">District</label>
                        {/* <br></br> */}
                        <select name="District" onChange={handleDistrict}>
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
                        <input type="text" placeholder="Optional"></input>
                    </div>
                </form>
                <div className="camp-submit">
                    <button type="button" onClick={handleSearchClick}>Search</button>
                </div>
                <div>
                    {showTable && (
                        <div className="bloodBankTable">
                            <h1 style={{ color: "#b11717" }}>Search Result</h1>
                            <Table data={bloodbank} headingData={headBloodbank} />
                        </div>
                    )}
                </div>
            </div>
        </div>



    )
}

export default BloodBankDir;