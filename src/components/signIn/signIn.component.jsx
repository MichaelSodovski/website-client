import React from 'react';
import '../signIn/signIn.component.css'
import { Link } from "react-router-dom";
import axios from 'axios';

export default function SignIn() {
    let formData = new FormData();

    const submitFormSignIn = (formData) => {
        const testURL = "http://localhost:3100/login";
        const myInit = {
            method: "POST",
            mode: 'no-cors',
            body: formData
        };

        const myRequest = new Request(testURL, myInit);

        fetch(myRequest).then(function (response) {
            return response;
        }).then(function (response) {
            console.log(response);
        }).catch(function (e) {
            console.log(e);
        });
    }

    const userNameHandler = (e) => {
        formData.append('userName', "michael");
    };

    const passWordHandler = (e) => {
        formData.append('passWord', "asdsad1234Asd");
    };

    return (
        <React.Fragment>
            <form onSubmit={(e) => { submitFormSignIn(formData); e.preventDefault(); }}>
                <div className="signIn-form-container">
                    <h1 className="welcome-header">Welcome</h1>
                    <div className="userName-form-container">
                        <input className="input-user-name" type="text" name="userName" placeholder='User name'
                            //should start with an alphabet so. All other characters can be alphabets, numbers or an underscore so.
                            required
                            pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                            minLength={"6"}
                            maxLength={"20"}
                            onChange={(e) => userNameHandler(e)}
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
                            onChange={(e) => passWordHandler(e)}
                        ></input>
                    </div>
                    <div className="forgot-remember-container">
                        <Link className="userName-forgot-link" to="/userNameRecovery">Forgot user name?</Link>
                        <Link className="password-forgot-link" to="/passwordRecovery">Forgot password?</Link>
                    </div>
                    <div className="form-submit-btn-container">
                        <button className="form-submit-btn">Sign in</button>
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