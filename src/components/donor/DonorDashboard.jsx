import React from "react";
import DonorHome from "./DonorHome";

function DonorDashboard(){
    return (
        <div className="DonorDashboard">
            <div className="topdiv">
                <div className="DonorHeadDiv"><h1>Welcome XYZ</h1></div>
                <div className = "DonorProfileImgDiv"><img className = "DonorProfileImg" src = "images/profile_image.jpeg"></img></div>
            </div>  
            <div className="DonorMainDiv">
                <ul className="DonorDashboardUl">
                <li className="DonorDashboardLi"><a href="#">Home</a></li>
                <li className="DonorDashboardLi"><a href = "#">View/Update Profile</a></li>
                <li className="DonorDashboardLi"><a href = "#">Blood Requests</a></li>
                <li className="DonorDashboardLi"><a href = "#">Logout</a></li>
                </ul>
                <DonorHome></DonorHome>

            </div>  

        </div>
    )
}

export default DonorDashboard;