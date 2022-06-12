import React from 'react';
import '../username-recovery/username-recovery.component.css'

export default function UsernameRecovery() {
    return (
        <React.Fragment>
            <form action="/recoverUserName" method="POST">
                <div className="email-form-container">
                    <input
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