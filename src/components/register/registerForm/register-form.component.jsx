import React, { useState } from 'react';
import '../registerForm/register-form.component.css'
import {
    PasswordValidationInstructions, FirstNameValidationInstructions,
    LastNameValidationInstructions, UserNameValidationInstructions,
    EmailValidationInstructions, DateValidationInstructions, FirstNameValid,
    LastNameValid, UserNameValid, EmailValid, PasswordValid, DateValid
} from '../registerForm/register-form-utils'

export default function Form() {
    const [isFirstNameValid, setisFirstNameValid] = useState();
    const [isFirstNamePristine, setisFirstNamePristine] = useState(false);
    const validityCheckHandlerFirstName = () => {
        setisFirstNameValid(document.getElementById("firstNameInput").validity.valid);
    }
    const isFirstNameTouchedHandler = (e) => {
        setisFirstNamePristine(true);
    }
    const [isLastNameValid, setisLastNameValid] = useState();
    const [isLastNamePristine, setisLastNamePristine] = useState(false);
    const validityCheckHandlerLastName = () => {
        setisLastNameValid(document.getElementById("lastNameInput").validity.valid);
    }
    const isLastNameTouchedHandler = (e) => {
        setisLastNamePristine(true);
    }
    const [isUserNameValid, setisUserNameValid] = useState();
    const [isUserNamePristine, setisUserNamePristine] = useState(false);
    const validityCheckHandlerUsertName = (e) => {
        setisUserNameValid(document.getElementById("userNameInput").validity.valid);
    }
    const isUserNameTouchedHandler = (e) => {
        setisUserNamePristine(true);
    }
    const [isPasswordValid, setisPasswordValid] = useState();
    const [isPasswordPristine, setisPasswordPristine] = useState(false);
    const validityCheckHandlerPassword = (e) => {
        setisPasswordValid(document.getElementById("passwordInput").validity.valid);
    }
    const isPasswordTouchedHandler = (e) => {
        setisPasswordPristine(true);
    }
    const [isEmailValid, setisEmailValid] = useState();
    const [isEmailPristine, setisEmailPristine] = useState(false);
    const validityCheckHandlerEmail = (e) => {
        setisEmailValid(document.getElementById("emailInput").validity.valid);
    }
    const isEmailTouchedHandler = (e) => {
        setisEmailPristine(true);
    }
    const [isDateValid, setisDateValid] = useState();
    const [isDatePristine, setisDatePristine] = useState(false);
    const validityCheckHandlerDate = (e) => {
        setisDateValid(document.getElementById("date-of-birth-input").validity.valid);
    }
    const isDateTouchedHandler = (e) => {
        setisDatePristine(true);
    }

    return (
        <React.Fragment>
            <form className="register-form-container" action="/adduser" method="POST">
            <h1 className="register-header">Register</h1>
                <div className={"first-name-container"}>
                    <input className={"first-name-input"} id="firstNameInput" placeholder="enter your first name" type="text" name="firstName"
                        required
                        //must contain letters only
                        pattern="[a-zA-Z]+"
                        minLength={"2"}
                        maxLength={"20"}
                        onChange={(e) => validityCheckHandlerFirstName(e)}
                        onClick={(e) => isFirstNameTouchedHandler(e)}
                    ></input>
                    <div className={"first-name-container-validation"}>
                        {isFirstNamePristine && isFirstNameValid &&
                            <FirstNameValid></FirstNameValid>
                        }
                        {isFirstNamePristine && !isFirstNameValid &&
                            <FirstNameValidationInstructions></FirstNameValidationInstructions>
                        }
                    </div>
                </div>
                <div className={"last-name-container"}>
                    <input className={"last-name-input"} id="lastNameInput" placeholder="enter your last name" type="text" name="lastName"
                        required
                        pattern="[a-zA-Z]+"
                        minLength={"2"}
                        maxLength={"20"}
                        onChange={(e) => validityCheckHandlerLastName(e)}
                        onClick={(e) => isLastNameTouchedHandler(e)}
                    ></input>
                    <div className={"last-name-container-validation"}>
                        {isLastNamePristine && isLastNameValid &&
                            <LastNameValid></LastNameValid>
                        }
                        {isLastNamePristine && !isLastNameValid &&
                            <LastNameValidationInstructions></LastNameValidationInstructions>
                        }
                    </div>
                </div>
                <div className={"user-name-container"}>
                    <input
                    className={"user-name-input"}
                        id="userNameInput"
                        placeholder="enter your user name"
                        type="text"
                        name="userName"
                        //should start with an alphabet so. All other characters can be alphabets, numbers or an underscore so.
                        required pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                        minLength={"6"}
                        maxLength={"20"}
                        onChange={(e) => validityCheckHandlerUsertName(e)}
                        onClick={(e) => isUserNameTouchedHandler(e)}
                    ></input>
                    <div className={"user-name-container-validation"}>
                        {isUserNamePristine && isUserNameValid &&
                            <UserNameValid></UserNameValid>
                        }
                        {isUserNamePristine && !isUserNameValid &&
                            <UserNameValidationInstructions></UserNameValidationInstructions>
                        }
                    </div>
                </div>
                <div className={"password-container"}>
                    <input
                    className={"password-input"}
                        id="passwordInput"
                        placeholder="enter your password"
                        type="password"
                        name="passWord"
                        required
                        //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        autoComplete="on"
                        minLength={"9"}
                        maxLength={"20"}
                        onChange={(e) => validityCheckHandlerPassword(e)}
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
                </div>
                <div className={"email-container"}>
                    <input
                    className={"email-input"}
                        id="emailInput"
                        placeholder="enter your email"
                        type="email"
                        name="email"
                        required
                        //must be gmail or hotmail and end with .com
                        pattern=".+@gmail\.com|.+@hotmail\.com"
                        minLength={"10"}
                        maxLength={"50"}
                        onChange={(e) => validityCheckHandlerEmail(e)}
                        onClick={(e) => isEmailTouchedHandler(e)}
                    ></input>
                    <div className={"email-container-validation"}>
                        {isEmailPristine && isEmailValid &&
                            <EmailValid></EmailValid>
                        }
                        {isEmailPristine && !isEmailValid &&
                            <EmailValidationInstructions></EmailValidationInstructions>
                        }
                    </div>
                </div>
                <div className={"date-of-birth-container"}>
                    <input
                    className={"date-of-birth-input"}
                        id="date-of-birth-input"
                        placeholder="enter your date of birth"
                        type="date"
                        name="birthDate"
                        required
                        pattern="^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$"
                        minLength={"8"}
                        maxLength={"8"}
                        onChange={(e) => validityCheckHandlerDate(e)}
                        onClick={(e) => isDateTouchedHandler(e)}
                    ></input>
                    <div className={"date-container-validation"}>
                        {isDatePristine && isDateValid &&
                            <DateValid></DateValid>
                        }
                        {isDatePristine && !isDateValid &&
                            <DateValidationInstructions></DateValidationInstructions>
                        }
                    </div>
                </div>
                <div className={"gender-container"}>
                    <select className={"gender-input"} name="gender">
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                </div>
                <br></br>
                <input className="form-submit-btn" type="submit" value="Submit" ></input>
            </form>
        </React.Fragment>
    );
}