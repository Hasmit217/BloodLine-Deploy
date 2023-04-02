import React from "react";
// import {Outlet, Link} from "react-router-dom";
// import Home from "../dashboard/Home"; 


function navbar() {
    return (
        <div>
            <nav className="navbar">
                <a href="#">
                    <img className="logo-img" src="images/BloodLine.png"></img>
                </a>
                <div className="navbar-func-container">
                    <div className="navbar-func"> <a href="#">Dashboard</a>
                        <div className="dropdown-content">
                            <li>
                                <a href="#">Home</a>
                                {/* <Link to = "Home">Home</Link> */}
                                <a href="#">About Blood Donation</a>
                                <a href="#">Contact Us</a>
                                <a href="#">Notification/News</a>
                            </li>
                        </div>
                    </div>
                    <div className="navbar-func"> <a href="#">Donate Blood</a>
                        <div className="dropdown-content">
                            <li>
                                <a href="#">Donor login</a>
                                <a href="#">Search Blood donation camps</a>
                                <a href="#">Register as Volunteer</a>
                                <a href="#">About Blood donation</a>
                            </li>
                        </div>
                    </div>
                    <div className="navbar-func"> <a href="#">Find Blood</a>
                        <div className="dropdown-content">
                            <li>
                                <a href="#">Blood availiblity</a>
                                <a href="#">Blood bank Directory</a>
                                <a href="#">Contact volunteer donors</a>
                                <a href="#">Make Blood Request</a>
                            </li>
                        </div>
                    </div>
                    <div className="navbar-func"> <a href="#">Blood Bank Login</a>
                        <div className="dropdown-content">
                            <li>
                                <a href="#">Login</a>
                                <a href="#">Register Blood bank</a>
                            </li>
                        </div>
                    </div>
                    <div className="navbar-func"> <a href="#">Host blood camp</a>
                        <div className="dropdown-content">
                            <li>
                                <a href="#">Register Blood Camp</a>
                                <a href="#">Learn About Hosting Blood camp</a>
                            </li>
                        </div>
                    </div>
                </div>


            </nav>
        </div>
    )
}

export default navbar;