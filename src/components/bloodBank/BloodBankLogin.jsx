import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return !isAuthenticated && <button onClick={() => loginWithRedirect()}><Link style={{color:"white"}} to="/bloodBankDash">Log In</Link></button>;
};


const LogoutButton = () => {
    const { logout, isAuthenticated, user } = useAuth0();

    return (isAuthenticated && (
        <div>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
            </button>
            <p>Hi! {user.name}</p>
        </div>
    )
    );
};

function BloodBankLogin() {
    return (
        <div className="bldBankLogin-container">
            <div className="bldCell-img">
                <img src="https://c4.wallpaperflare.com/wallpaper/362/904/948/red-blood-cells-wallpaper-preview.jpg"></img>
            </div>
            <div className="bldBankLogin">
                <h1 style={{color:"white"}}>Blood Bank Login</h1>
                <div className="bbl-form">
                    <div className="bblwhite-container">
                        <LoginButton />
                        <button><Link style={{color:"white"}}to="/registerBloodBank">Register New BloodBank</Link></button>
                        <LogoutButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BloodBankLogin;