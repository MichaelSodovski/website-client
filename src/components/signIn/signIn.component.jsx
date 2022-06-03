import React from 'react';
import '../signIn/signIn.component.css'

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
                        <a>Forgot password?</a>
                    </div>
                    <div className="form-submit-btn-container">
                        <button className="form-submit-btn" type="submit" value="Submit">Sign in</button>
                    </div>
                    <div class="sign-up-container">
                        <a>Don't have an account?</a>
                        <a to="/register">sign up</a>
                    </div>
                    <hr></hr>
                </div>
            </form>
        </React.Fragment>
    );
}