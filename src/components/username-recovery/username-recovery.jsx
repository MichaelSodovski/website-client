import React from 'react';
import '../username-recovery/username-recovery.css'

export default function UsernameRecovery() {
    return (
        <React.Fragment>
            <form action="/recoverUserName" method="POST">
                <div className="email-form-container-userName-recovery">
                    <h1>User name recovery</h1>
                    <input
                    className="email-input-userName-recovery"
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