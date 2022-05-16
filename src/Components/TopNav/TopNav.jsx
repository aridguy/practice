import React from "react";

import "./TopNav.css";
import Ppics from "../../Assets/Images/ProfileImg.jpg";

const TopNav = () => {
    return (

        <div>
            <nav className="nav navbar-inverse fixed-top">
                <ul>
                    <li className="tittledash"><b>Dashboard</b></li>
                    <li><span className="fa fa-search"></span></li>
                    <li><span className="fa fa-bell"></span></li>
                    <li><img className="pictureProfile" alt="ppimage" src={Ppics} /></li>
                </ul>
            </nav>

        </div>

    );
}

export default TopNav;