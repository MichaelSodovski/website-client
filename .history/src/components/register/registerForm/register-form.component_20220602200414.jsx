import React, { useState } from 'react';
import '../registerForm/register-form.component.css'

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
    const validityCheckHandlerLasttName = () => {
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
                <div className={"first-name-container"}>
                    <label>First Name: </label>
                    <input
                        id="firstNameInput"
                        placeholder="enter your first name"
                        type="text"
                        name="firstName"
                        required
                        pattern="[a-zA-Z]+"
                        minLength={"2"}
                        maxLength={"20"}
                        onChange={(e) => validityCheckHandlerFirstName(e)}
                        onClick={(e) => isFirstNameTouchedHandler(e)}
                    ></input>
                    <div className={"first-name-container-validation"}>
                        {isFirstNamePristine && isFirstNameValid &&
                            <p>first name is valid</p>
                        }
                        {isFirstNamePristine && !isFirstNameValid &&
                            <p>first name is not valid</p>
                        }
                    </div>
                </div>
                <div className={"last-name-container"}>
                    <label>Last Name: </label>
                    <input
                        id="lastNameInput"
                        placeholder="enter your last name"
                        type="text" name="lastName"
                        required
                        pattern="[a-zA-Z]+"
                        minLength={"2"}
                        maxLength={"20"}
                        onChange={(e) => validityCheckHandlerLasttName(e)}
                        onClick={(e) => isLastNameTouchedHandler(e)}
                    ></input>
                    <div className={"last-name-container-validation"}>
                        {isLastNamePristine && isLastNameValid &&
                            <p style={{ backgroundColor: 'greenyellow' }}>last name is valid</p>
                        }
                        {isLastNamePristine && !isLastNameValid &&
                            <p style={{ backgroundColor: 'red' }}>last name is not valid</p>
                        }
                    </div>
                </div>
                <div className={"user-name-container"}>
                    <label>User Name: </label>
                    <input
                        id="userNameInput"
                        placeholder="enter your user name"
                        type="text"
                        name="userName"
                        required pattern="[a-zA-Z]+"
                        minLength={"6"}
                        maxLength={"20"}
                        onChange={(e) => validityCheckHandlerUsertName(e)}
                        onClick={(e) => isUserNameTouchedHandler(e)}
                    ></input>
                    <div className={"user-name-container-validation"}>
                        {isUserNamePristine && isUserNameValid &&
                            <p style={{ backgroundColor: 'greenyellow' }}>user name is valid</p>
                        }
                        {isUserNamePristine && !isUserNameValid &&
                            <p style={{ backgroundColor: 'red' }}>user name is not valid</p>
                        }
                    </div>
                </div>
                <div className={"password-container"}>
                    <label>Password: </label>
                    <input
                        id="passwordInput"
                        placeholder="enter your password"
                        type="password"
                        name="passWord"
                        required
                        pattern="[a-zA-Z]+"
                        autoComplete="on"
                        minLength={"10"}
                        maxLength={"20"}
                        onChange={(e) => validityCheckHandlerPassword(e)}
                        onClick={(e) => isPasswordTouchedHandler(e)}
                    ></input>
                    <div className={"password-container-validation"}>
                        {isPasswordPristine && isPasswordValid &&
                            <p style={{ backgroundColor: 'greenyellow' }}>password is valid</p>
                        }
                        {isPasswordPristine && !isPasswordValid &&
                            <p style={{ backgroundColor: 'red' }}>password is not valid</p>
                        }
                    </div>
                </div>
                <div className={"email-container"}>
                    <label>Email: </label>
                    <input
                        id="emailInput"
                        placeholder="enter your email"
                        type="email"
                        name="email"
                        required
                        pattern=".+@gmail\.com|.+@hotmail\.com"
                        minLength={"10"}
                        maxLength={"50"}
                        onChange={(e) => validityCheckHandlerEmail(e)}
                        onClick={(e) => isEmailTouchedHandler(e)}
                    ></input>
                    <div className={"email-container-validation"}>
                        {isEmailPristine && isEmailValid &&
                            <p style={{ backgroundColor: 'greenyellow' }}>email is valid</p>
                        }
                        {isEmailPristine && !isEmailValid &&
                            <p style={{ backgroundColor: 'red' }}>email is not valid</p>
                        }
                    </div>
                </div>
                <div className={"date-of-birth-container"}>
                    <label>Date Of Birth: </label>
                    <input
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
                            <p style={{ backgroundColor: 'greenyellow' }}>date is valid</p>
                        }
                        {isDatePristine && !isDateValid &&
                            <p style={{ backgroundColor: 'red' }}>date is not valid</p>
                        }
                    </div>
                </div>
                <div className={"gender-container"}>
                    <label>Gender: </label>
                    <select name="gender">
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                </div>
                <br></br>
                <input type="submit" value="Submit" ></input>
            </form>
        </React.Fragment>
    );
}