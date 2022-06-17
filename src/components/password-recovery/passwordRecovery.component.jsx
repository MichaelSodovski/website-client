import React from 'react';
import '../password-recovery/passwordRecovery.component.css'

export default function PasswordRecovery() {

    return (
        <React.Fragment>
            <form action="/recoverPassword" method="POST">
                <div className="email-form-container">
                    <h1 >Password recovery</h1>
                    <input
                        className="email-input-password-recovery"
                        type="email"
                        name="email"
                        placeholder='enter the email you used to register you account'
                        required
                        pattern=".+@gmail\.com|.+@hotmail\.com"
                        minLength={"10"}
                        maxLength={"50"}
                    ></input>
                    <button className="form-submit-btn" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
}