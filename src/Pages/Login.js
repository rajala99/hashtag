import React, {Component} from 'react'
import { useState } from 'react';
import './Login.css';
import loginpage from '../Images/loginpage.png'
import Hashtag_Login from './Hashtag_Login';

const togglePasswordText = () => {
    let txtPassValue = document.getElementById("txtPass");
    if (txtPassValue.type === "password") {
        txtPassValue.type = "text";
        document.getElementById("eyeCross").style.display = "block";
    } else {
        txtPassValue.type = "password";
        document.getElementById("eyeCross").style.display = "none";
    }
}
const Login = () => {
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, userPass);
        if (userName !== "" && userPass !== "") {        
            window.location.replace("http://localhost:3001/Hashtag_Login")
        } else {
            alert("Please Provide valid Credentials");
        }
    }
    const signUp = () => {
        window.location.replace("http://localhost:3001/Signup")
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-7 my-5'  >
                    <div className='page_one'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <h3>Login</h3>
                            <br />
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg></span>
                                <input type="text" class="form-control" placeholder=" username or email" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setUserName(e.target.value)} required />
                            </div>
                            <br />
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                </svg></span>
                                <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" id='txtpass' onChange={(e) => setUserPass(e.target.value)} required />
                                <span className='show-hide-password' onClick={() => togglePasswordText()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                    </svg>
                                    <svg id="eyeCross" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                    </svg>
                                </span>
                            </div>
                            <br />
                            <div className='form-check my-8 md-2 d-flex justify-content-left'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp;&nbsp;<small className='terms'>Rememeber me</small>
                                </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className='form-check  md-2 d-flex justify-content-right'>
                                    <a className='terms underline'>
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <br />
                            <div class="d-grid gap-2">
                                <button class="btn btn-dark" type="submit">create account</button>
                            </div>
                            <br />
                            <div className='form-check my-8 md-2 d-flex justify-content-left'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault"></label> &nbsp;&nbsp;<small>
                                    <p className='terms my-1'>I Understand and agree with the<span className='underline'>Terms and Conditions</span> and  <span className='underline'>Privacy policy</span>.</p>
                                </small>    </div>
                            <div>
                                <p className='terms' on onClick={signUp}> Already have an account  ?<span className='bold'>Sign up</span></p>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div className='image'>
                        <img src={loginpage} class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div >
    )

}





export default Login