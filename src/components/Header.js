import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>about</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ?
                            setBtnName("Logout") :
                            setBtnName("Login")

                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    );
};
export default Header;