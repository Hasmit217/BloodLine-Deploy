import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./dashboard/Home";
import CampSchedule from "./bloodCamp/CampSchedule";
import RequestBloodForm from "./patient/RequestForm";
import DonorHome from "./donor/DonorHome";
import Profile from "./donor/Profile";

import {
    BrowserRouter as Router,
    RouterProvider,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import DonorDashboard from "./donor/DonorDashboard";


function App() {
    return (
        <div>
            {/* <Profile/> */}
            <Router>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/campSchedule" element={<CampSchedule />} />
                    <Route path="/requestBloodForm" element={<RequestBloodForm />} />
                    <Route path ="/DonorDashboard" element={<DonorDashboard/>} />
                    <Route path="/DonorHome" element={<DonorDashboard/>} />
                    <Route path="/Profile" element={<Profile/>} />
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

