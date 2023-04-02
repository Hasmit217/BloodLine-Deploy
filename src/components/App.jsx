import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./dashboard/Home";
import CampSchedule from "./bloodCamp/CampSchedule";
import RequestBloodForm from "./patient/RequestForm";

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
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/campSchudule" element={<CampSchedule />} />
                    <Route path="/requestBloodForm" element={<RequestBloodForm />} />
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

