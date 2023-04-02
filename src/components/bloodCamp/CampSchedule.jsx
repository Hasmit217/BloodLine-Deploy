import React from "react";
import DropDown from "./DropDown";
import options from "./option"

function campSchedule() {
    return (
        <div className="camp-container">
            <img className="below-nav-img" src="images/belownavimg.webp"></img>
            <div className="search-container">
                <h1>Camp Schedule</h1>
                <form action="" className="camp-search-form">
                    <div className="camp-subFields">
                        <label htmlFor="state">State</label>
                        <DropDown placeholder="Select" options={options}></DropDown>
                    </div>
                    <div className="camp-subFields">
                        <label htmlFor="state">District</label>
                        <DropDown placeholder="Select" options={options}></DropDown>
                    </div>
                    <div className="camp-subFields">
                        <label htmlFor="state">City</label>
                        <DropDown placeholder="Select" options={options}></DropDown>
                    </div>
                    <div className="camp-subFields">
                        <label htmlFor="state">Camp Date</label>
                        <div className="camp-subFields-date">
                            <input type="date" placeholder="select date"></input>
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

export default campSchedule;