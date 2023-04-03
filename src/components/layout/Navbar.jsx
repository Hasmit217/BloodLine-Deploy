import React from "react";
import { Link } from "react-router-dom";


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
                                <Link to="/">Home</Link>
                                <Link to="/AboutUs">About</Link>
                                <Link to="/camp">Contact Us</Link>
                                <Link to="/">Notification/News</Link>
                            </li>
                        </div>
                    </div>
                    <div className="navbar-func"> <a href="#">Donate Blood</a>
                        <div className="dropdown-content">
                            <li>
                                <Link to="/DonorDashboard">Donor login</Link>
                                <Link to="/campSchedule">Search Blood donation camps</Link>
                                <Link to="">Register as Volunteer</Link>
                                <Link to="">About Blood donation</Link>
                            </li>
                        </div>
                    </div>
                    <div className="navbar-func"> <a href="#">Find Blood</a>
                        <div className="dropdown-content">
                            <li>
                                <Link to="/bloodAvailSearch">Blood availiblity</Link>
                                <Link to="/BloodBankDir">Blood bank Directory</Link>
                                <Link to="">Contact volunteer donors</Link>
                                <Link to="/requestBloodForm">Make Blood Request</Link>
                            </li>
                        </div>
                    </div>
                    <div className="navbar-func"> <a href="#">Blood Bank Login</a>
                        <div className="dropdown-content">
                            <li>
                                <Link to="">Login</Link>
                                <Link to="">Register Blood bank</Link>
                            </li>
                        </div>
                    </div>
                    <div className="navbar-func"> <a href="#">Host blood camp</a>
                        <div className="dropdown-content">
                            <li>
                                <Link to="">Register Blood Camp</Link>
                                <Link to="">Learn About Hosting Blood camp</Link>
                            </li>
                        </div>
                    </div>
                </div>


            </nav>
        </div>
    )
}

export default navbar;