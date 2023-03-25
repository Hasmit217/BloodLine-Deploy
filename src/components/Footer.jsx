import React from "react";

function footer() {
    return (
        <div>
            <footer>
                <div className="footer-row">
                    <div className="footer-col">
                        <h3>Looking For Blood</h3>
                        <ul>
                            <li><a href="#">Search Blood Availiblity</a></li>
                            <li><a href="#search">Find Donor</a></li>
                            <li><a href="#search">Blood bank Directory</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Want to Donate Blood</h3>
                        <ul>
                            <li><a href="#">Register as Volunteer</a></li>
                            <li><a href="#About">search Blood camps</a></li>
                            <li><a href="#Contact">Donor Login</a></li>
                            <li><a href="#support">About Blood Donation</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Blood Bank Login</h3>
                        <ul>
                            <li><a href="#">Add your Blood Bank</a></li>
                            <li><a href="#About">Blood Bank login</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>About us</h3>
                        <ul>
                            <li><a href="#">About BloodLine</a></li>
                            <li><a href="#About">Contact Us</a></li>
                            <li><a href="#Contact">Gallery</a></li>
                            <li><a href="#support">About Blood donation</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-row">
                    <p>© 2023 by Ministry of Health and Family Welfare.</p>
                </div>
                <div className="footer-row">
                <p><a href="terms">Terms & Condition</a>|<a href="terms">Privacy Policy</a>| Last Updates:24 March 2023 </p>
                </div>
            </footer>
        </div>
    )
}

export default footer;