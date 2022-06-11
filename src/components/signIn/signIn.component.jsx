import React from 'react';
import '../signIn/signIn.component.css'
import { Link } from "react-router-dom";

export default function SignIn() {

    return (
        <React.Fragment>
            <form action="/login" method="POST">
                <div className="signIn-form-container">
                    <div className="userName-form-container">
                        <input type="text" name="userName" placeholder='User name' 
                        //should start with an alphabet so. All other characters can be alphabets, numbers or an underscore so.
                        required 
                        pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                        minLength={"6"}
                        maxLength={"20"}
                        ></input>
                    </div>
                    <div className="password-form-container">
                        <input type="password" name="passWord" required
                        //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        autoComplete="on"
                        minLength={"9"}
                        maxLength={"20"} 
                        placeholder='Password'
                        ></input>
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