import React from "react";

function DonorDashboard(){
    return (
        <div className="DonorDashboard">
            <h1>Welcome Manju</h1>
            <ul className="DonorDashboardUl">
                <li className="DonorDashboardLi"><a href = "#">Home</a></li>
                <li className="DonorDashboardLi"><a href = "#">View/Update Profile</a></li>
                <li className="DonorDashboardLi"><a href = "#">Blood Requests</a></li>
                <li className="DonorDashboardLi"><a href = "#">Logout</a></li>
            </ul>
        </div>
    )
}

export default DonorDashboard;