import React from 'react';
import '../signIn/signIn.component.css'
import { Link } from "react-router-dom";

export default function SignIn() {

    return (
        <React.Fragment>
            <form action="/validateUser" method="POST">
                <div className="signIn-form-container">
                    <div className="userName-form-container">
                        <input placeholder='User name'></input>
                    </div>
                    <div className="password-form-container">
                        <input placeholder='Password'></input>
                    </div>
                    <div class="forgot-remember-container">
                        <input type="checkbox"></input>
                        <Link to="/passwordRecovery">Forgot password?</Link>
                    </div>
                    <div className="form-submit-btn-container">
                        <button className="form-submit-btn" type="submit" value="Submit">Sign in</button>
                    </div>
                    <div class="sign-up-container">
                        <a>Don't have an account?</a>
                        <Link to="/register">Sign up</Link>
                    </div>
                    <hr></hr>
                </div>
            </form>
        </React.Fragment>
    );
}