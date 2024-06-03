import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { updateAccountDet } from "../redux/slices/bbAccount";
import { BASE_URL } from "../../services/helper";


const BBProfile = () => {

    const getProfPic = useSelector((state) => state.bbProPic);
    const dispatch = useDispatch();
    const BBinfo = useSelector((state) => state.bbAccountDet);
    console.log(BBinfo);

    const initialUserState = {
        name: '',
        category: '',
        licNo: '',
        licDate: '',
        licRenDate: '',
        bldAvail: '',
        serTime: '',
        state: '',
        district: '',
        city: '',
        pincode: '',
        bankLat: '',
        bankLong: '',
        address: '',
        offName: '',
        offQuali: '',
        offContact: '',
        contact: '',
        helpLine: '',
        email: '',
        profileImage: null
    };

    const [user, setUser] = useState(initialUserState);

    useEffect(() => {
        // Update the user state when BBinfo changes
        setUser({
            ...initialUserState, // Reset to default values
            ...BBinfo, // Update with BBinfo values
        });
    }, []);


    const handleInput = (e) => {
        e.preventDefault();

        let value = e.target.value;
        let name = e.target.name;
        setUser({ ...user, [name]: value });
    }

    const updateBBProfile = (e) => {
        e.preventDefault();

        console.log(user);


        axios.post(BASE_URL+'h/updateBankDetails', user)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        alert('Form submitted successfully!');
        window.location.reload();

    }
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        // console.log(file)
        setUser({ ...user, profileImage: file });
    }

    const handleUpload = (e) => {
        const formData = new FormData();
        formData.append("email", BBinfo.email); // Assuming you have the user's email in the user object
        formData.append("profileImage", user.profileImage);
        console.log(formData);

        // Send the formData to the server
        axios.post(BASE_URL+"n/uploadImg", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                console.log(response.data);
                // Update the Redux state or perform other actions based on the response
                dispatch(updateAccountDet({ profileImage: response.data.imageUrl }));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div class="bb-profile-container">
            <div class="bb-profile-pic">
                <div class='bb-pic-head'>Profile Picture</div>
                <div class="bb-pic-content">
                    <img className="bb-avatar" src={user.profileImage ? URL.createObjectURL(user.profileImage) : getProfPic.imageUrl} width="200" height="200" alt="Profile" />
                    {/* <img class='bb-avatar' src={getProfPic.imageUrl} width="200" height="200" /> */}
                </div>
                <span style={{ textAlign: "center", margin: "5px" }}>JPG or PNG format no larger than 5MB</span>
                <input type="file" onChange={handleImageUpload} accept="image/png, image/jpeg" />
                {/* <button style={{  }}>Upload New Image</button> */}
                <button style={{ width: "100%", padding: "8px" }} onClick={handleUpload}>
                    Upload New Image
                </button>
            </div>
            <div class="bb-profile-details">
                <div class="bb-divide-container">
                    <div class="bb-profile-head">Blood bank Details</div>
                    <div class="bb-details-sub-container">
                        <div class="bb-blockEle">
                            <label for="name">Blood Bank Name</label>
                            <input type="text" name="name" value={user.name} onChange={handleInput}></input>
                        </div>
                    </div>
                    <div class="bb-details-sub-container">
                        <div class="bb-blockEle">
                            <label for="licNo">Licence Number</label>
                            <input type="text" disabled name="licNo" class='disabled-field' value={user.licNo}></input>
                        </div>

                        <div class="bb-blockEle">
                            <label for="licDate">Licence Date</label>
                            <input type="date" name="licDate" value={user.licDate}></input>
                        </div>

                        <div class="bb-blockEle">
                            <label for="licRenDate">Licence Renewal Date</label>
                            <input type="date" name="licRenDate" value={user.licRenDate} onChange={handleInput}></input>
                        </div>

                    </div>

                    <div class="bb-details-sub-container">
                        <div class="bb-blockEle">
                            <label for="bldAvail">Blood Availiblity</label>
                            <input type="text" name="bldAvail" value={user.bldAvail} onChange={handleInput}></input>
                        </div>
                    </div>

                    <div class="bb-details-sub-container">
                        <div class="bb-blockEle">
                            <label for="category">Category</label>
                            <input type="text" name="category" value={user.category} onChange={handleInput}></input>
                        </div>

                        <div class="bb-blockEle">
                            <label for="serTime">Service Time</label>
                            <input type="text" name="serTime" value={user.serTime} onChange={handleInput}></input>
                        </div>
                    </div>
                </div>

                <div class="bb-divide-container">
                    <div class="bb-profile-head">Location Details</div>
                    <div class="bb-details-sub-container">
                        <div class="bb-blockEle">
                            <label for="state">State</label>
                            <input type="text" disabled name="state" value={user.state}></input>
                        </div>

                        <div class="bb-blockEle">
                            <label for="district">District</label>
                            <input type="text" disabled name="district" value={user.district}></input>
                        </div>

                        <div class="bb-blockEle">
                            <label for="city">City</label>
                            <input type="text" name="city" value={user.city} onChange={handleInput}></input>
                        </div>

                    </div>
                    <div class="bb-details-sub-container">
                        <div class="bb-blockEle">
                            <label for="pincode">Pincode</label>
                            <input type="number" name="pincode" value={user.pincode} onChange={handleInput}></input>
                        </div>

                        <div class="bb-blockEle">
                            <label for="bankLat">Latitude</label>
                            <input type="float" name="bankLat" value={user.bankLat} onChange={handleInput}></input>
                        </div>

                        <div class="bb-blockEle">
                            <label for="bankLong">Longitude</label>
                            <input type="float" name="bankLong" value={user.bankLong} onChange={handleInput}></input>
                        </div>

                    </div>
                </div>
                <div class="bb-divide-container">
                    <div class="bb-profile-head">Contact Details</div>
                    <div class="bb-details-sub-container">
                        <div class="bb-blockEle">
                            <label for="offName">Name</label>
                            <input type="text" name="offName" value={user.offName} onChange={handleInput} ></input>
                        </div>

                        <div class="bb-blockEle">
                            <label for="offQuali">Qualification</label>
                            <input type="text" name="offQuali" value={user.offQuali} onChange={handleInput}></input>
                        </div>

                    </div>
                    <div class="bb-details-sub-container">
                        <div class="bb-blockEle">
                            <label for="offContact">BloodBank Officer contact number</label>
                            <input type="number" name="offContact" value={user.offContact} onChange={handleInput}></input>
                        </div>
                        <div class="bb-blockEle">
                            <label for="contact">Contact Number</label>
                            <input type="number" name="contact" value={user.contact} onChange={handleInput}></input>
                        </div>
                        <div class="bb-blockEle">
                            <label for="helpLine">Helpline Number</label>
                            <input type="number" name="helpLine" value={user.helpLine} onChange={handleInput}></input>
                        </div>

                    </div>
                </div>
                <div class="updateButton">
                    <button onClick={updateBBProfile}>Update Profile</button>
                </div>

            </div>
        </div>
    )
};

export default BBProfile;