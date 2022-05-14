import React from 'react';
import "./Login.css";
// import AdminDetails from "../../Auth/AdminDetails.json";

function Login() {
    return (
        <div>

            <div className="container-fluid p-5 bkg text-white text-center">
                <h1>THIS IS <b className='special'>PEADY ADMIN</b> SECTION ONLY</h1>
                <p>Only admin or staffs of <b>PEADY</b>can login here</p>

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
                                    <button className='btn btn-warning sbtn'>Login</button>
                                </form>
                                <button className='fb-btn'>Facebook</button> <button className='githubBtn'>GitHub</button>
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
