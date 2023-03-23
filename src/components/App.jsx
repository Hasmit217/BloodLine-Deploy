import React from "react";
import HomeCard from "./HomeCard";
import HomeInfo from "./HomeInfo";


function App(){
    return(
        <div>
            
            <div className="row">
                <div className="column card1"><HomeCard pageURL = "#" name = "Donor Login/Registration"  className="HomeCard"></HomeCard></div>
                <div className="column card2"><HomeCard pageURL = "#" name = "Blood Camp Registration" className="HomeCard"></HomeCard></div>
                <div className="column card3"><HomeCard pageURL = "#" name = "Blood Availability Search" className="HomeCard"></HomeCard></div>
                <div className="column card4"><HomeCard pageURL = "#" name = "Blood Bank Directory" className="HomeCard"></HomeCard></div>
                <div className="column card5"><HomeCard pageURL = "#" name = "Blood Donation Camps" className="HomeCard"></HomeCard></div>
            </div>

            <HomeInfo></HomeInfo>
        </div>
    )
}

export default App;

//2 20  20
//2 50  49
//3 15  72

