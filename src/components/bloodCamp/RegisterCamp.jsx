import React,{useState} from "react";
import options from "../bloodCamp/option";
import axios from "axios";

function RegisterCamp() {

    const [state, setState] = useState("");
    const [districts, setDistrict] = useState(""); 
    const [bloodBank, setBloodBank] = useState(""); 

    const [user,setUser] = useState({
        name: "",
        orgName: "",
        orgType: "",
        orgEmail: "",
        participant: "",
        campDate: "",
        campTime: "",
        address: "",
        state: "",
        district: "",
        city: "",
        bldBank:"",
        campLat:"",
        campLong:"",
        orgPerName:"",
        orgPerCont:"",
        orgPerEmail:"",
        remark: ""
    });
    console.log(districts);

    const handleState = (e) => {
        e.preventDefault(); 

        const value = e.target.value;
        setState(value);
    }
    const handleDistrict = async (e) => {
        e.preventDefault(); 
        const val = e.target.value;
        setDistrict(val);
        setUser({...user,district:val})

        console.log(districts);

        const abc = districts;

        try{
            const res = await axios.get("http://localhost:8080/c/showBloodBanks",{
                abc,
            })
            .then(response => {
                console.log(response.message);
            })
            .catch(error => {
                console.error(error);
            });
        }
        catch (e) {
            console.log(e);
        }
        
        // axios.get('http://localhost:8080/showBloodBanks',{dis:districts})
         
    }   

    const handleBloodBank = (e) =>{
        e.preventDefault(); 

        const value = e.target.value;
        setBloodBank(value);
    }
    const handleInput = (e) =>{
        e.preventDefault(); 

        let value = e.target.value;
        let name = e.target.name;
        setUser({...user,[name]:value})
    }
    const handleStateInput = (e) =>{
        e.preventDefault(); 

        handleState(e);
        handleInput(e);
    }
    const handleDistrictInput = (e) =>{
        e.preventDefault(); 

        handleDistrict(e);
        handleInput(e);
    }
    const handleBloodBankInput = (e) =>{
        e.preventDefault(); 

        handleBloodBank(e);
        handleInput(e);
    }

    const handleClick = (e) => {
        e.preventDefault(); 

        console.log(user);
        
        axios.post('http://localhost:8080/registerCamp',user)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    
    return (
        <div className="br-container">
            <div className="br-heading"><h1>Register BloodCamp</h1></div>
            <form method="POST">
                <div className="rc-form">
                    <div className="br-sub-container">
                        <h2>Camp Details</h2>
                        <div className="br-sub-container-field">
                            <label for="name">Camp Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="name" value={user.name} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgName">Organization Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="orgName" value={user.orgName} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgType">Organization Type<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="orgType" value={user.orgType} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgEmail">Organization Email<span class="required-field"></span></label>
                            <br></br>
                            <input type="email" name="orgEmail" value={user.orgEmail} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="participant">Estimated participant<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="participant" value={user.participant} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="date">Camp Schedule Date<span class="required-field"></span></label>
                            <br></br>
                            <input type="date" placeholder="Select Date" name="campDate" value={user.campDate} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="time">Camp Schedule Time<span class="required-field"></span></label>
                            <br></br>
                            <input type="time" placeholder="Select Date" name="campTime" value={user.campTime} onChange={handleInput} required></input>
                        </div>
                    </div>

                    <div className="br-sub-container">
                        <h2>Camp Location Details</h2>
                        <div className="br-sub-container-field">
                            <label for="state">State<span class="required-field"></span></label>
                            <br></br>
                            <select name="state" onChange={handleStateInput} value={user.state} required>
                                <option value="" selected disabled>Select State</option>
                                {options.map((item) => {
                                    return <option value={item.label}>{item.label}</option>
                                    {/* console.log(item.label); */ }
                                })}
                            </select>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="district">District<span class="required-field"></span></label>
                            <br></br>
                            <select name="district" onChange={handleDistrictInput} value={user.district} required>
                                <option value="" selected disabled>Select District</option>
                                {options.map((item) => {
                                    if (item.label === state) {
                                        return item.district.map((itemDis) => {
                                            return <option value={itemDis}>{itemDis}</option>
                                            {/* console.log(itemDis); */ }
                                        })
                                    }
                                })}
                            </select>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="city">City<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="city" value={user.city} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="bldBank">Blood Bank<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="bldBank" value={user.bldBank} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="campLat">Latitude<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="campLat" min="0" max="180" step="0.01" value={user.campLat} onChange={handleInput} required></input>
                            <label for="campLong">Longitude<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="campLong" min="0" max="180" step="0.01" value={user.campLong} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="address">Address<span class="required-field"></span></label>
                            <br></br>
                            <textarea name="address" value={user.address} onChange={handleInput} required></textarea>
                        </div>

                    </div>
                    <div className="br-sub-container">
                        <h2>Camp Organizer Details</h2>
                        <div className="br-sub-container-field">
                            <label for="orgPerName">Organizer Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="orgPerName" value={user.orgPerName} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgPerContact">Contact Number<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="orgPerCont" value={user.orgPerCont} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgPerEmail">Organizer Email<span class="required-field"></span></label>
                            <br></br>
                            <input type="email" name="contEmail" value={user.orgPerEmail} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="remark">Remarks</label>
                            <br></br>
                            <input type="text" value={user.remark} onChange={handleInput} name="remark"></input>
                        </div>
                    </div>
                </div>
                <div className="br-form-submit">
                    <button type="submit" onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterCamp;