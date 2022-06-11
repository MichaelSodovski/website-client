import React from 'react';
import '../passwordUpdate/passwordUpdate.component.css'

export default function UpdatePassword() {

    return (
        <React.Fragment>
            <form action="/updatePassword" method="POST">
                <div className="updatePassword-form-container">
                    <input
                        id="passwordInput"
                        type="password"
                        name="newPassword"
                        placeholder='enter a new password'
                        required
                        //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        autoComplete="on"
                        minLength={"9"}
                        maxLength={"20"}
                    ></input>
                    <input
                        type="password"
                        name="newPasswordVerify"
                        placeholder='repeat the new password'
                        required
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        autoComplete="on"
                        minLength={"9"}
                        maxLength={"20"}
                    ></input>
                    <button className="form-submit-btn" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
}

