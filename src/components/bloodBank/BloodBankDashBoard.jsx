import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";
import RegisterBloodBank from "./RegisterBloodBank";
import BBProfile from "./BBProfile";
import BBGuildlines from "./BBGuildlines";
import BldRequest from "./ShowBloodReq";

import { useDispatch, useSelector } from "react-redux";
import { boolCnt0, boolCnt1, boolCnt2, boolCnt3 } from "../redux/slices/boolCounter";
import { updateImageUrl } from "../redux/slices/bbProfilePic";
import { updateAccountDet } from "../redux/slices/bbAccount";

const BBDashContainer = () => {
    const { logout, isAuthenticated, user } = useAuth0();
    const [bankRegistered, setBankRegistered] = useState(true);

    const boolValue = useSelector((state) => state.boolCnt);

    const dispatch = useDispatch();
    const updateDel = useSelector((state) => state.bbAccountDet);

    if (isAuthenticated && user) {
        dispatch(
            updateAccountDet({
                email: user.email,
            })
        );
    }

    const HandleProfile = (e) => {
    
        if (isAuthenticated && user) {
            axios.post('http://localhost:8080/m/findRegisteredBB', { userid: user.email })
                .then(response => {
                    if (response.data.length === 0) {
                        alert("Please Register your BloodBank to view Profile!!")
                    }
                    else {
                        // console.log(response.data);
                        const responseData = response.data[0];
                        console.log(response.data[0]);
                        dispatch(
                            updateAccountDet({
                                name: responseData.BloodBankName,
                                category: responseData.Category,
                                licNo: responseData.LicenseNo,
                                licDate: responseData.DateLicenseObtained,
                                licRenDate: responseData.DateofRenewal,
                                bldAvail: responseData.BloodComponentAvailable,
                                serTime: responseData.ServiceTime,
                                state: responseData.State,
                                district: responseData.District,
                                city: responseData.City,
                                pincode: responseData.Pincode,
                                bankLat: responseData.Latitude,
                                bankLong: responseData.Longitude,
                                address: responseData.Address,
                                offName: responseData.NodalOfficer,
                                offQuali: responseData.QualificationNodalOfficer,
                                offContact: responseData.ContactNodalOfficer,
                                contact: responseData.MobileNodalOfficer,
                                helpLine: responseData.Helpline,
                                email: responseData.Email,
                                profImg: responseData.BloodBankImage,
                            })
                        );
                        // console.log(updateDel.email);
                        dispatch(boolCnt1());
                        dispatch(updateImageUrl(user.picture));
                    }
                    // console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
    
    const HandleRegister = (e) => {
        if (isAuthenticated && user) {
            axios.post('http://localhost:8080/m/findRegisteredBB', { userid: user.email })
                .then(response => {
                    if (response.data.length === 0) {
                        dispatch(boolCnt2());
                    }
                    else {
                        dispatch(boolCnt1());
                        dispatch(updateImageUrl(user.picture));
                        alert("Already registered :)");
                    }
                    // console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    const HandleReq = (e) => {
        if (isAuthenticated && user) {
            axios.post('http://localhost:8080/m/findRegisteredBB', { userid: user.email })
                .then(response => {
                    if (response.data.length === 0) {
                        alert("Please Register your BloodBank first to view the BloodRequest !!");
                    }
                    else {
                        dispatch(boolCnt3());
                    }
                    // console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    const ProfilePageNav = () => {
        return (
            <div class="bb-dash-profile">
                <nav class="nav-profile-bb">

                    <a class="nav-link-bb " onClick={HandleProfile} target="__blank">Profile</a>
                    <a class="nav-link-bb" onClick={HandleRegister} target="__blank">Register</a>
                    {/* <a class="nav-link-bb" target="__blank">Update</a> */}
                    {/* <a class="nav-link-bb" onClick={HandleReq} target="__blank">Blood Requests</a> */}
                </nav>

            </div>
        )
    };

    return (
        isAuthenticated && (
            <div className="bb-dash-container">
                <div className="bb-dash-header">
                    <p><h1>Welcome</h1> </p>
                </div>
                <ProfilePageNav />
                {boolValue === 0 && <BBGuildlines />}
                {boolValue === 1 && <BBProfile />}
                {boolValue === 2 && <RegisterBloodBank />}
            </div>
        )
    );
};


function BldBankDash() {
    return (
        <div className="DonorDashboard">
            <BBDashContainer />
        </div>
    )
}

export default BldBankDash;