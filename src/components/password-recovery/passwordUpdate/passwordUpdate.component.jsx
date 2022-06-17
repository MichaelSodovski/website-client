import React from 'react';
import '../passwordUpdate/passwordUpdate.component.css'
import { useState, useEffect } from "react";
import { PasswordValidationInstructions, PasswordValid } from '../../register/registerForm/register-form-utils';

export default function UpdatePassword() {
    const [password, setPassword] = useState("a");
    const [passwordVerification, setPasswordVerification] = useState("b");
    const [verified, setVerified] = useState(true);

    const [isPasswordValid, setisPasswordValid] = useState();
    const [isPasswordPristine, setisPasswordPristine] = useState(false);
    const validityCheckHandlerPassword = (e) => {
        setisPasswordValid(document.getElementById("passwordInput").validity.valid);
    }

    const isPasswordTouchedHandler = (e) => {
        setisPasswordPristine(true);
    }

    const [isPasswordVerificationValid, setisPasswordVerificationValid] = useState();
    const [isPasswordVerificationPristine, setisPasswordVerificationPristine] = useState(false);
    const validityCheckHandlerPasswordVerification = (e) => {
        setisPasswordVerificationValid(document.getElementById("passwordVerificationInput").validity.valid);
    }

    const isPasswordVerificationTouchedHandler = (e) => {
        setisPasswordVerificationPristine(true);
    }

    const inputRefHandler = (e) => {
        setPassword(e.target.value);
    }

    const inputRefVerificationHandler = (e) => {
        setPasswordVerification(e.target.value);
    }

    function verificationHandler() {
        if (password === passwordVerification &&
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password) &&
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(passwordVerification)) {
            setVerified(false);
        }
        else setVerified(true);
    };

    useEffect(() => {
        verificationHandler();
    }, [password, passwordVerification]);

    return (
        <React.Fragment>
            <form action="/updatePassword" method="POST">
                <div className="updatePassword-form-container">
                    <h1>New password</h1>
                    <input
                    className="new-password-input"
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
                        onChange={e => inputRefHandler(e)}
                        onInput={(e) => validityCheckHandlerPassword(e)}
                        onClick={(e) => isPasswordTouchedHandler(e)}
                    ></input>
                    <div className={"password-container-validation"}>
                        {isPasswordPristine && isPasswordValid &&
                            <PasswordValid></PasswordValid>
                        }
                        {isPasswordPristine && !isPasswordValid &&
                            <PasswordValidationInstructions></PasswordValidationInstructions>
                        }
                    </div>
                    <input
                    className="new-password-confirm-input"
                        id="passwordVerificationInput"
                        type="password"
                        name="newPasswordVerify"
                        placeholder='repeat the new password'
                        required
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        autoComplete="on"
                        minLength={"9"}
                        maxLength={"20"}
                        onChange={e => inputRefVerificationHandler(e)}
                        onInput={(e) => validityCheckHandlerPasswordVerification(e)}
                        onClick={(e) => isPasswordVerificationTouchedHandler(e)}
                    ></input>
                    <div className={"password-container-validation"}>
                        {isPasswordVerificationPristine && isPasswordVerificationValid &&
                            <PasswordValid></PasswordValid>
                        }
                        {isPasswordVerificationPristine && !isPasswordVerificationValid &&
                            <PasswordValidationInstructions></PasswordValidationInstructions>
                        }
                    </div>
                    <button disabled={verified} className="form-submit-btn" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
}

