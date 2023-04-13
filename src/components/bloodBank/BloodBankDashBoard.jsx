import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


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


function BldBankDash(){
    return(
        <div className="bldDash-container">
            <h1>HI</h1>
            <LogoutButton/>
        </div>
    )
}

export default BldBankDash;