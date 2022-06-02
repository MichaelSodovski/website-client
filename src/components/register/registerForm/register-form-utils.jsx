import React from "react";
export function FirstNameValidationInstructions() {
    return (
        <React.Fragment>
            <div>
                <p>first name is not valid:</p>
                <ul>
                    <li>Minimum 2 characters.</li>
                    <li>Maximum 20 characters.</li>
                    <li>must contain letters only.</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export function LastNameValidationInstructions() {
    return (
        <React.Fragment>
            <div>
                <p>last name is not valid</p>
                <ul>
                    <li>Minimum 2 characters.</li>
                    <li>Maximum 20 characters.</li>
                    <li>must contain letters only.</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export function PasswordValidationInstructions() {

    return (
        <React.Fragment>
            <div>
                <p>password is not valid:</p>
                <ul>
                    <li>Minimum eight characters.</li>
                    <li>at least one uppercase letter.</li>
                    <li>at least one lowercase letter.</li>
                    <li>at least one number.</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export function UserNameValidationInstructions() {
    return (
        <React.Fragment>
            <div>
                <p >user name is not valid</p>
                <ul>
                    <li>Minimum 6 characters.</li>
                    <li>Maximum 20 characters.</li>
                    <li>should start with an alphabet.</li>
                    <li>Can contain numbers\underscore.</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export function EmailValidationInstructions() {
    return (
        <React.Fragment>
            <div>
                <p>email is not valid</p>
                <ul>
                    <li>must be gmail or hotmail and </li>
                    <li>must end with .com</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export function DateValidationInstructions() {
    return (
        <React.Fragment>
            <div>
                <p>date is not valid</p>
                <ul>
                    <li>must contain day\month\year </li>
                </ul>
            </div>
        </React.Fragment>
    )
}



