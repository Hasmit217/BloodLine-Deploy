import React from "react";
import DonorHome from "./DonorHome";
import { Link } from "react-router-dom";

function DonorDashboard(){
    return (
        <div className="DonorDashboard">
            <div className="topdiv">
                <div className="DonorHeadDiv"><h1>Welcome XYZ</h1></div>
                <div className = "DonorProfileImgDiv"><img className = "DonorProfileImg" src = "images/profile_image.jpeg"></img></div>
            </div>  
            <div className="DonorMainDiv">
                <ul className="DonorDashboardUl">
                <li className="DonorDashboardLi"><Link to="/DonorDash">Home</Link></li>
                <li className="DonorDashboardLi"><Link to="/DonorDash">View/Update Profile</Link></li>
                <li className="DonorDashboardLi"><Link to="/DonorDash">Blood Requests</Link></li>
                <li className="DonorDashboardLi"><Link to="/DonorDash">Logout</Link></li>
                </ul>
                <DonorHome></DonorHome>

            </div>  

        </div>
    )
}

export default DonorDashboard;