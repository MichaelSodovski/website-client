import React from 'react';
import '../signIn/signIn.component.css'
import { Link } from "react-router-dom";
import { submitFormSignIn } from '../../services/signIn.service'
import axios from 'axios';

export default function SignIn() {
    let bodyFormData = new FormData();

    const submitFormSignIn = (bodyFormData) => {
        debugger;
        axios({
            method: "POST",
            url: "http://localhost:3100/login",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(function (response) {
            console.log(response);
        }).catch(function (response) {
            console.log(response);
        });
    }

    return (
        <React.Fragment>
            <form>
                <div className="signIn-form-container">
                    <h1 className="welcome-header">Welcome</h1>
                    <div className="userName-form-container">
                        <input className="input-user-name" type="text" name="userName" placeholder='User name'
                            //should start with an alphabet so. All other characters can be alphabets, numbers or an underscore so.
                            required
                            pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                            minLength={"6"}
                            maxLength={"20"}
                            onChange={(e) => bodyFormData.append('userName', e.target.value)}
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
                            onChange={(e) => bodyFormData.append('passWord', e.target.value)}
                        ></input>
                    </div>
                    <div className="forgot-remember-container">
                        <Link className="userName-forgot-link" to="/userNameRecovery">Forgot user name?</Link>
                        <Link className="password-forgot-link" to="/passwordRecovery">Forgot password?</Link>
                    </div>
                    <div className="form-submit-btn-container">
                        <button className="form-submit-btn" onSubmit={() => submitFormSignIn(bodyFormData)}>Sign in</button>
                    </div>
                    <div className="sign-up-container">
                        <a>Don't have an account?</a>
                        <Link className="signUp-link" to="/register">Sign up</Link>
                    </div>
                    <hr></hr>
                </div>
            </form>
        </React.Fragment>
    );
}