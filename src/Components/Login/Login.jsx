import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
// import AdminDetails from "../../Auth/AdminDetails.json";

const Login =() => {
    return (
        <div>

            <div className="container-fluid p-5 bkg text-white text-center">
                <h1>THIS IS <b className='special'>IKONICS ADMIN</b> SECTION ONLY</h1>
                <p>Only admin or staffs of <b>IKONICS</b> can login here</p>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-6 wrap-form'>
                            <div>
                                <h2 className='headLogin'>Admin Login</h2>
                                <form>
                                    <p><input type="text" name='username' className='form-control af' placeholder='Username/email' /></p>
                                    <span id='reportName'></span>
                                    <p><input type="password" name="password" className='form-control bf' placeholder='***password here' /></p>
                                    <span id='reportpword'></span>
                                    <Link to="/Dashboard"> <button className='btn btn-warning sbtn'>Login</button></Link>
                                </form>
                                <div className='socialButtons'><button className='fb-btn'>Facebook</button> <button className='githubBtn'>GitHub</button></div>
                                <span className='chkbx'><input className='checkbx' type="checkbox" /> Remember me</span>
                            </div>
                           
                            <p className='notices'>NOTICE: &nbsp;<i>Only Admin / Staffs of this company can login to the dashboard</i></p>
                    
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login
