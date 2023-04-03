import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./dashboard/Home";
import CampSchedule from "./bloodCamp/CampSchedule";
import RequestBloodForm from "./patient/RequestForm";
import BloodAvail from "./patient/BloodAvail";
import BloodBankDir from "./bloodBank/BloodBankDir";
import AboutUs from "./dashboard/AboutUs";
import DonorDashboard from "./donor/DonorDashboard";
import DonorHome from "./donor/DonorHome";
import Slider from "./layout/Slider";
import {sliderItems} from "./bloodCamp/option";

import {
    BrowserRouter as Router,
    RouterProvider,
    Route,
    Routes,
    Link,
} from "react-router-dom";


function App() {
    return (
        <div>
            <Router>

                <Navbar></Navbar>
                {/* <BloodAvail/> */}
                {/* <Slider sildes={sliderItems}></Slider> */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/campSchudule" element={<CampSchedule />} />
                    <Route path="/requestBloodForm" element={<RequestBloodForm />} />
                    <Route path="/bloodAvailSearch" element={<BloodAvail/>}/>
                    <Route path="/bloodBankDir" element={<BloodBankDir/>}/>
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                    <Route path="/DonorDash" element={<DonorDashboard/>}/>
                    <Route path="/DonorHome" element={<DonorHome/>}/>
                </Routes>

                <Footer></Footer>
            </Router>
        </div>
    )
}

export default App;

//2 20  20
//2 50  49
//3 15  72

