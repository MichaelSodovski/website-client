import React from 'react';
import '../signIn/signIn.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SignIn() {
    const [UserName, setUsername] = useState(null);
    const [PassWord, setPassWord] = useState(null);
    const [validation, setValidation] = useState(true);
    const [validationMessages, setValidationMessages] = useState("");
    let history = useHistory();

    const submitFormSignIn = () => {
        fetch("/login", {
                method: "POST",
                mode: 'cors', // no-cors closes the body of the request and if u open cors then you need to allow the host at the server side. 
                credentials: 'include', // have to use that if i want to set cookies (without it cookies won't set)
                body: JSON.stringify({ UserName, PassWord }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => response.json()).then(function (response) {
                if (response.message === 'User not found. please check youre credentials..') {
                    setValidation(true);
                    setValidationMessages(response.message);
                }
                else {
                    window.localStorage.setItem('Authorization', response.tokens.jwtToken);
                    window.localStorage.setItem('Refresh', response.tokens.refreshToken);
                    history.push("/home");
                    window.location.reload(true);
                }
            }).catch(function (e) {
                console.log(e);
            });
    }

    return (
        <React.Fragment>
            <form onSubmit={(e) => { submitFormSignIn(); e.preventDefault(); }}>
                <div className="signIn-form-container">
                    <h1 className="welcome-header">Welcome</h1>
                    <div className="userName-form-container">
                        <input className="input-user-name" type="text" name="userName" placeholder='User name'
                            //should start with an alphabet so. All other characters can be alphabets, numbers or an underscore so.
                            required
                            pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                            minLength={"6"}
                            maxLength={"20"}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div className="password-form-container">
                        <input className="input-password" type="password" name="passWord" required
                            //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                            autoComplete="on"
                            minLength={"9"}
                            maxLength={"20"}
                            placeholder='Password'
                            onChange={(e) => setPassWord(e.target.value)}
                        ></input>
                    </div>
                    {validation &&
                        <p className={"validationP"}> {validationMessages} </p>
                    }
                    <div className="forgot-remember-container">
                        <Link className="userName-forgot-link" to="/userNameRecovery">Forgot user name?</Link>
                        <Link className="password-forgot-link" to="/passwordRecovery">Forgot password?</Link>
                    </div>
                    <div className="form-submit-btn-container">
                        <button className="form-submit-btn">Sign in</button>
                    </div>
                    <div className="sign-up-container">
                        <p>Don't have an account?</p>
                        <Link className="signUp-link" to="/register">Sign up</Link>
                    </div>
                    <hr></hr>
                </div>
            </form>
        </React.Fragment>
    );
}