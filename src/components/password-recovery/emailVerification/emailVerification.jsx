import React from 'react';
import '../emailVerification/emailVerification.css'

export default function EmailVerification() {

    return (
        <React.Fragment>
            <form action="/verifyCode" method="POST">
                <div className="codeVerification-form-container">
                    <h1>Email verification</h1>
                    <input
                    className="email-verification-input-recovery"
                        type="text"
                        name="verificationCode"
                        placeholder='enter 5 digit code sent to youre email'
                        required
                        pattern="^\d{5}$"
                        minLength={"5"}
                        maxLength={"5"}
                    ></input>
                    <button className="form-submit-btn" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
}