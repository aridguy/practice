import React from "react";
import "./SideNav.css";
import ProfileImage from "../../Assets/Images/ProfilePics.jpg";
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div>

            <div className="sidebar">
                <div className="profile-pics-Wrap"><img className="p-pics" src={ProfileImage} alt="profile-pics" /> <br />
               <span className="profile-pics-title">Welcome back ADMIN 000343</span>
                </div>
                <p><i className="fa fa-home"></i> Home</p>
                <p><i className="fa fa-users team" aria-hidden="true"></i> Team</p>
                <p><i className="fa fa-users team" aria-hidden="true"></i> Clients</p>
                <p><i className="fa fa-product-hunt product" aria-hidden="true"></i> Products</p>
                <hr />
                <Link to="/"><div className="logoutGuys"><i className="fa fa-sign-out signOutIcon" aria-hidden="true"></i> <b className="logoutBtn">Logout</b></div></Link>
            </div>
        </div>
    )
}

export default SideNav;