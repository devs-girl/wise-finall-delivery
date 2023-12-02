
import React, { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import '../../App.css';
import '../../Responsive.css';
import SignUpImg from '../../images/lgImg.png';
import LogoWhite from '../../images/logo-white.png';
const Login = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className='signUp-area'>
            {/* left  */}
            {/* desktop */}
            <div className=" left-signup login-dsk">
                <h1>Big title goes here <br />  and here and here to <br /> make three lines.</h1>

            </div>
            {/* mobile */}
            <div className=" left left-signup sign-mobile ll-gg">
                <h1>Big title goes here <br />  and here and here to <br /> make three lines.</h1>
                <div className="signImg">
                    <img src={SignUpImg} alt="" />
                </div>
            </div>

            {/* right  */}
            <div className='right right-login'>
                <img className='signUp-logo' src={LogoWhite} alt="" />
                <div className='signUp-Input login-input'>
                    <input className="mb-20" type="text" placeholder='Username/email' name="" id="" />

                    <div className="signUp-Input-Icon">
                        <input
                            type={showPassword1 ? "text" : "password"}
                            placeholder="Password"
                            name=""
                            id=""
                        />
                        <div onClick={togglePasswordVisibility1}>
                            {" "}
                            {showPassword1 ? (
                                <IoEyeSharp className="Input-Icon" />
                            ) : (
                                <IoEyeOffSharp className="Input-Icon" />
                            )}
                        </div>
                    </div>
                    <div className="mb-20">
                        <a className='forgot' href="">Forgot Password?</a>
                    </div>


                    <a href=""><button className='sign-btn'>Login</button></a>
                    <a href=""><button className='sign-btn sign-btn-fb'>Login with Facebook</button></a>
                    <p className='or'>Don’t have an account? <a className='or' href="">Sign Up</a></p>
                </div>

            </div>
        </div>
    );
};

export default Login;