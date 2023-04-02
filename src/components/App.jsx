import React from "react";
import DonorDashboard from "./donor/DonorDashboard";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./dashboard/Home";
import DonorHome from "./donor/DonorHome";
import CampSchedule from "./bloodCamp/CampSchedule";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <DonorDashboard></DonorDashboard> */}
            {/* <Home></Home> */}
            {/* <CampSchedule></CampSchedule> */}
            <Footer></Footer>
        </div>
    )
}

export default App;


