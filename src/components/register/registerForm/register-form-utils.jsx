import React from "react";
import '../registerForm/register-form-utils.css'
import { SiCachet } from "react-icons/si";
import { RiCloseCircleFill } from "react-icons/ri";


export function FirstNameValid() {
    return (
        <React.Fragment>
            <div className={"valid-container"}>
                <p><SiCachet></SiCachet> first name is valid</p>
            </div>
        </React.Fragment>
    )
}

export function FirstNameValidationInstructions() {
    return (
        <React.Fragment>
            <div className={"validation-instructions-container"}>
                <p><RiCloseCircleFill></RiCloseCircleFill> first name is not valid:</p>
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
            <div className={"validation-instructions-container"}>
                <p><RiCloseCircleFill></RiCloseCircleFill> last name is not valid</p>
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
            <div className={"validation-instructions-container"}>
                <p><RiCloseCircleFill></RiCloseCircleFill> password is not valid:</p>
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
            <div className={"validation-instructions-container"}>
                <p><RiCloseCircleFill></RiCloseCircleFill> user name is not valid</p>
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
            <div className={"validation-instructions-container"}>
                <p><RiCloseCircleFill></RiCloseCircleFill> email is not valid</p>
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
            <div className={"validation-instructions-container"}>
                <p><RiCloseCircleFill></RiCloseCircleFill> date is not valid</p>
                <ul>
                    <li>must contain day\month\year </li>
                </ul>
            </div>
        </React.Fragment>
    )
}



